/* ==========================================
   TNET AI - TEXT SCAN API
   Powered by Winston AI
========================================== */

export default async function handler(req, res) {

    // Allow POST only
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const { text } = req.body;

        if (!text || text.trim().length < 10) {

            return res.status(400).json({
                error: "Text is too short or missing"
            });

        }

        /* ==========================================
           CALL WINSTON AI API
           (Assuming API key-based service)
        ========================================== */

        const response = await fetch(
            "https://api.gowinston.ai/v1/ai-content-detection",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.WINSTON_API_KEY}`
                },
                body: JSON.stringify({
                    text: text
                })
            }
        );

        const data = await response.json();

        /* ==========================================
           TNET INTELLIGENCE LAYER
        ========================================== */

        const aiScore =
            data?.score || 0;

        const originality =
            1 - aiScore;

        let feedback = "";

        if (aiScore > 0.8) {
            feedback = "High probability of AI-generated content. Rewrite recommended.";
        } else if (aiScore > 0.5) {
            feedback = "Possible AI involvement detected. Review content.";
        } else {
            feedback = "Content appears human-written and original.";
        }

        /* ==========================================
           FINAL RESPONSE
        ========================================== */

        return res.status(200).json({

            ai_score: aiScore,
            originality: originality,
            feedback: feedback,

            details: data

        });

    } catch (error) {

        return res.status(500).json({

            error: "Text scan failed",
            details: error.message

        });

    }

}
