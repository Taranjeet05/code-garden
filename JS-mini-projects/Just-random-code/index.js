const copyBtn = document.getElementById("copyBtn");
const textToCopy = document.getElementById("text");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textToCopy.innerHTML);
    alert("✅Text copied to clipboard!");
  } catch (error) {
    alert("❌Failed to copy!");
  }
});
