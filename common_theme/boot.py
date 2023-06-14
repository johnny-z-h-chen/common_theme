import frappe
from frappe.core.doctype.navbar_settings.navbar_settings import get_app_logo, get_navbar_settings

def boot_session(bootinfo):
	""" hiding the user menu """
	hidden_user_menu = ["View Website", "Toggle Full Width", "Toggle Theme"]
	settings_dropdown = bootinfo["navbar_settings"].settings_dropdown
	
	for i in range(len(settings_dropdown) - 1, -1, -1):
		current_menu = settings_dropdown[i]

		if current_menu.item_label in hidden_user_menu:
			bootinfo["navbar_settings"].settings_dropdown.remove(current_menu)
