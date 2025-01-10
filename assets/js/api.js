function updateProfileImage(a) {
  fetch(`https://api.lanyard.rest/v1/users/${a}`)
    .then((a) => a.json())
    .then((e) => {
      const t = e.data.discord_user,
        r = document.querySelector(`.profile-img[data-user-id="${a}"]`),
        d = document.querySelector(`.name[data-user-id="${a}"]`);
      (r.src = t.avatar
        ? `https://cdn.discordapp.com/avatars/${t.id}/${t.avatar}.${
            t.avatar.startsWith("a_") ? "gif" : "png"
          }?size=512`
        : "https://cdn.discordapp.com/embed/avatars/1.png"),
        (d.textContent = t.username);
    })
    .catch((a) => {});
}
window.onload = function () {
  updateProfileImage("145955902279647232"),
    updateProfileImage("421389279114166282"),
    updateProfileImage("1012237128517832704"),
    updateProfileImage("938519366604050502");
};
