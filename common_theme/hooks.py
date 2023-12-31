from . import __version__ as app_version

app_name = "common_theme"
app_title = "Common Theme"
app_publisher = "JohnnyChen"
app_description = "common ui for erpnext"
app_email = "johnny.z.h.chenn@outlook.com"
app_logo_url = "https://kce.com.hk/wp-content/uploads/2021/11/Group-206.png"
app_license = "MIT"

extend_bootinfo = "common_theme.boot.boot_session"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = "common_theme.bundle.css"
app_include_js = [
  "common_theme.bundle.js"
]

# include js, css files in header of web template
web_include_css = "common_theme.bundle.css"
web_include_js = "common_theme.bundle.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "common_theme/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "common_theme.utils.jinja_methods",
#	"filters": "common_theme.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "common_theme.install.before_install"
# after_install = "common_theme.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "common_theme.uninstall.before_uninstall"
# after_uninstall = "common_theme.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "common_theme.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"common_theme.tasks.all"
#	],
#	"daily": [
#		"common_theme.tasks.daily"
#	],
#	"hourly": [
#		"common_theme.tasks.hourly"
#	],
#	"weekly": [
#		"common_theme.tasks.weekly"
#	],
#	"monthly": [
#		"common_theme.tasks.monthly"
#	],
# }

# Testing
# -------
# before_tests = "common_theme.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "common_theme.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "common_theme.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["common_theme.utils.before_request"]
# after_request = ["common_theme.utils.after_request"]

# Job Events
# ----------
# before_job = ["common_theme.utils.before_job"]
# after_job = ["common_theme.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"common_theme.auth.validate"
# ]

fixtures = [
    "Custom Field"
]