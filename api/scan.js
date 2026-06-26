import axios from "axios";
import FormData from "form-data";

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method Not Allowed"
    });
  }

  try {

    const apiUser = process.env.SIGHTENGINE_API_USER;
    const apiSecret = process.env.SIGHTENGINE_API_SECRET;

    if (!apiUser || !apiSecret) {
      return res.status(500).json({
        success: false,
        error: "Missing Sightengine environment variables."
      });
    }

    // Hapa tutasoma multipart/form-data kutoka kwa request.
    // Kwenye hatua inayofuata tutaongeza parser (mfano Busboy)
    // ili kupata image file salama.

    return res.status(200).json({
      success: true,
      message: "API server is ready.",
      nextStep: "Connect multipart parser then send image to Sightengine."
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message
    });

  }

}
