import { bootstrapCameraKit } from "@snap/camera-kit";

async function startCamera() {
  const cameraKit = await bootstrapCameraKit({
    apiToken: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzY1ODQ0MzE2LCJzdWIiOiIzYThjOGMyMC0wNjNlLTRlM2QtYjExMy1hZDM4MjE0NmI4ZjN-U1RBR0lOR344YTgyNDYyNC04MWQ2LTRlZDUtOTMxZS00ZTc2NWZmNjZhMTgifQ.A8deMAFp2b0TzIp2PhAQOEb_CSkhVDTYdtv-8OzjmSg"
  });

  const session = await cameraKit.createSession();

  const video = document.getElementById("camera");
  await session.setSource(video);

  document.body.appendChild(session.output.live);

  await session.play();
}

startCamera();
