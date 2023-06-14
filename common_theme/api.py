import json

import frappe
from frappe.desk.form.load import run_onload
from frappe.model.docstatus import DocStatus
from frappe.translate import set_preferred_language_cookie
from frappe.utils.telemetry import capture_doc


@frappe.whitelist()
def update_user_lang(lang):
    # update the user info in db
    user_doc = frappe.get_doc("User", frappe.session.user)
    user_doc.language = lang
    capture_doc(user_doc)

    user_doc.docstatus = {
		"Save": DocStatus.draft(),
		"Submit": DocStatus.submitted(),
		"Update": DocStatus.submitted(),
		"Cancel": DocStatus.cancelled(),
	}["Save"]
    
    user_doc.save()
    run_onload(user_doc)

    # update the cookie
    set_preferred_language_cookie(lang)

    return frappe.session.user