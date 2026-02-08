const box = document.getElementById("chatBox");

// GOOGLE FORM CONFIG
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScumT_D2iPik6NDUgAcYcO8zNUWV0o0o_sDHBqN3j3tBjb28Q/formResponse";
const ENTRY_JAWABAN = "entry.694825725";
const ENTRY_WAKTU   = "entry.725428782";

// CHAT AWAL
window.addEventListener("DOMContentLoaded", () => {

  box.innerHTML += `<div class="bot">Hai Seraaa 😊</div>`;

  setTimeout(() => {
    box.innerHTML += `<div class="bot">Aku mau ngomong sesuatu sama kamu...</div>`;
    box.scrollTop = box.scrollHeight;
  }, 800);

  setTimeout(() => {
    box.innerHTML += `<div class="bot">Kamu gamau ya deket sama aku lagi kayak dulu? Mau apa ngga?</div>`;
    document.querySelector(".options").style.display = "block";
    box.scrollTop = box.scrollHeight;
  }, 1600);

});

function reply(ans) {
  // tampilkan jawaban user
  box.innerHTML += `<div class="user">${ans === 'iya' ? 'Iya mau' : 'Engga mau'}</div>`;
  document.querySelector(".options").style.display = "none";

  // KIRIM DATA KE GOOGLE FORM (DIAM-DIAM)
  const data = new FormData();
  data.append(ENTRY_JAWABAN, ans);
  data.append(ENTRY_WAKTU, new Date().toLocaleString());

  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: data
  });

  // bot ngetik
  setTimeout(() => {
    box.innerHTML += `<div class="bot typing" id="typing">sedang mengetik...</div>`;
    box.scrollTop = box.scrollHeight;
  }, 600);

  // balasan bot
  setTimeout(() => {
    const typing = document.getElementById("typing");
    if (typing) typing.remove();

    if (ans === "iya") {
      box.innerHTML += `<div class="bot">EEEIHHH BENERAN?? KAMU MAU LAGI??? 😭💖</div>`;
    } else {
      box.innerHTML += `<div class="bot">ouw masih belum mau ya… gapapa kok, makasih udah nyempetin buka ini.</div>`;
    }

    box.scrollTop = box.scrollHeight;
  }, 1600);

  // tombol lanjut
  setTimeout(() => {
    box.innerHTML += `
      <button class="next-btn"
        onclick="location.href='final.html?jawaban=${ans}'">
        Lanjut 💕
      </button>
    `;
    box.scrollTop = box.scrollHeight;
  }, 2600);
}

