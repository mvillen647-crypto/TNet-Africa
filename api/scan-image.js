/* ==========================================
   TNET AI - IMAGE SCAN API
   Powered by Sightengine
========================================== */

export default async function handler(req, res) {

    // Allow POST only
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const formData = req.body;

        /* ==========================================
           IMPORTANT:
           In Vercel, file handling needs multer OR buffer
           For MVP, we assume base64 image OR external upload
        ========================================== */

        const image = formData?.image;

        if (!image) {

            return res.status(400).json({
                error: "No image provided"
            });

        }

        /* ==========================================
           CALL SIGHTENGINE API
        ========================================== */

        const response = await fetch(
            "https://api.sightengine.com/1.0/check.json",
            {
                method: "POST",
                body: new URLSearchParams({

                    // 🔑 API KEYS (set in Vercel ENV)
                    "api_user": process.env.SIGHTENGINE_API_USER,
                    "api_secret": process.env.SIGHTENGINE_API_SECRET,

                    // Models
                    "models": "genai, nudity, violence",

                    // Image input (URL or base64)
                    "media": image

                })
            }
        );

        const data = await response.json();

        /* ==========================================
           TNET LOGIC LAYER (IMPORTANT)
        ========================================== */

        const aiScore =
            data?.type?.ai_generated || 0;

        let verdict = "Unknown";

        if (aiScore > 0.8) {
            verdict = "Likely AI Generated";
        } else if (aiScore > 0.5) {
            verdict = "Possibly AI Generated";
        } else {
            verdict = "Likely Real Image";
        }

        /* ==========================================
           FINAL RESPONSE
        ========================================== */

        return res.status(200).json({

            ai_generated: aiScore,
            nudity: data?.nudity || {},
            violence: data?.violence || {},
            verdict: verdict,

            raw: data // for debugging

        });

    } catch (error) {

        return res.status(500).json({

            error: "Image scan failed",
            details: error.message

        });

    }

}
