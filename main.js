// ✅ PRODUCTION Client ID
const snapClientId = "60983cda-12ef-44bc-ba72-a16d0e7839bd";

// ✅ Your lenses (from your Snapchat organization)
const lenses = {
  "Hot Pink Glam": "d8a546d3-2d1a-48cb-94e7-f9f301fa0f79",
  "Eyeliner Switch": "8d137e83-f861-4e83-a2f9-952e434a5867",
  "Shadow Switch": "c51cc7b3-6ef9-4d01-9452-a49bcc483388",
  "Blush Parade": "619726bf-0d1a-499f-a190-2b635682975a",
  "Lipstick Parade": "abf4498e-dde9-4960-82f6-125b240b66ba"
};

// Initialize Snap Camera Kit
SnapKit.init({
  clientId: snapClientId,
  container: document.getElementById("camera-container"),

  onReady: () => {
    console.log("✅ Snap Camera Kit READY");
    switchLens("Hot Pink Glam"); // auto-load first lens
  },

  onError: (err) => {
    console.error("❌ Snap Camera Kit error:", err);
    alert("Snap Camera Kit failed to load. Check Platform Identifier & Client ID.");
  }
});

// Switch lens function
function switchLens(lensName) {
  const lensId = lenses[lensName];
  if (!lensId) return;

  SnapKit.loadLens(lensId)
    .then(() => console.log("🎨 Loaded lens:", lensName))
    .catch(err => console.error("Lens load error:", err));
}

