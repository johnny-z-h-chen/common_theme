import "./frappe/ui/page.html";
import "./frappe/ui/toolbar/navbar.html";
import "./frappe/ui/page.js";
import "./frappe/view/workspace.js";

// setup the full with for UI
localStorage.container_fullwidth = true;

// update the language
window.frappe.language_switcher = (lang) => {
  // update user`s language
  frappe.call("common_theme.api.update_user_lang", {
    lang: lang
  }).then((reponse) => {
    frappe.msgprint(__("Refreshing..."));
    window.location.reload();
  });
}