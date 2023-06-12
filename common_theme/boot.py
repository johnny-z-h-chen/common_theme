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

	support_language_swtich_navbar_items = [
		{
			"item_label": "English",
			"item_type": "Route",
			"route": "https://docs.erpnext.com/docs/v14/user/manual/en/introduction",
			"is_standard": 1,
		},
		{
			"item_label": "中文",
			"item_type": "Route",
			"route": "https://discuss.frappe.io",
			"is_standard": 1,
		},
		{
			"item_label": "繁体",
			"item_type": "Route",
			"route": "https://github.com/frappe/erpnext/issues",
			"is_standard": 1,
		},
	]
	# navbar_settings = frappe.get_single("Navbar Settings")
	# for item in support_language_swtich_navbar_items:
	# 	navbar_settings.append("support_language_swtich_navbar_items", item)
	
	# navbar_settings.save()
