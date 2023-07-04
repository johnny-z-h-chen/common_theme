(()=>{frappe.templates.page=`<div class="container page-body">
	<div class="page-toolbar hide">
		<div class="container">
		</div>
	</div>
	<div class="page-wrapper">
		<div class="page-content">
			<div class="workflow-button-area btn-group pull-right hide"></div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>
`;frappe.templates.navbar=`<header class="navbar navbar-expand sticky-top" role="navigation">
	<div class="container">
		<a class="navbar-brand navbar-home" href="/app">
			<img class="app-logo" style="width: {{ navbar_settings.logo_width || 24 }}px" src="{{ frappe.boot.app_logo_url }}">
		</a>
		<ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs"></ul>
		<div class="collapse navbar-collapse justify-content-end">
			<form class="form-inline fill-width justify-content-end" role="search" onsubmit="return false;">
				{% if (frappe.boot.read_only) { %}
					<span class="indicator-pill yellow no-indicator-dot" title="{%= __("Your site is getting upgraded.") %}">
						{%= __("Read Only Mode") %}
					</span>
				{% } %}
				<div class="input-group search-bar text-muted hidden">
					<input
						id="navbar-search"
						type="text"
						class="form-control"
						placeholder="{%= __("Search or type a command (Ctrl + G)") %}"
						aria-haspopup="true"
					>
					<span class="search-icon">
						<svg class="icon icon-sm"><use href="#icon-search"></use></svg>
					</span>
				</div>
			</form>
			<ul class="navbar-nav">
				<li class="nav-item dropdown dropdown-notifications dropdown-mobile hidden">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span class="notifications-seen">
							<svg class="icon icon-md"><use href="#icon-notification"></use></svg>
						</span>
						<span class="notifications-unseen">
							<svg class="icon icon-md"><use href="#icon-notification-with-indicator"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu notifications-list dropdown-menu-right" role="menu">
						<div class="notification-list-header">
							<div class="header-items"></div>
							<div class="header-actions"></div>
						</div>
						<div class="notification-list-body">
							<div class="panel-notifications"></div>
							<div class="panel-events"></div>
						</div>
					</div>
				</li>
				<li class="nav-item dropdown dropdown-message dropdown-mobile hidden">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span>
							<svg class="icon icon-md"><use href="#icon-small-message"></use></svg>
						</span>
					</a>
				</li>
				<li class="nav-item dropdown dropdown-message dropdown-mobile">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span>
							<svg class="icon icon-md"><use href="#icon-translate"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-help" role="menu">
						<div id="help-links"></div>
						<div class="dropdown-divider documentation-links"></div>
						{% for item in navbar_settings.language_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									<a class="dropdown-item" onclick="return {{ item.action }}">
										{%= __(item.item_label) %}
									</a>
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
				<li class="vertical-bar d-none d-sm-block"></li>
				<li class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block">
					<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
						{{ __("Help") }}
						<span>
							<svg class="icon icon-xs"><use href="#icon-small-down"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-help" role="menu">
						<div id="help-links"></div>
						<div class="dropdown-divider documentation-links"></div>
						{% for item in navbar_settings.help_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
				<li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">
					<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
						{{ avatar }}
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-user" role="menu">
						{% for item in navbar_settings.settings_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									<a class="dropdown-item" onclick="return {{ item.action }}">
										{%= __(item.item_label) %}
									</a>
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
			</ul>
		</div>
	</div>
</header>
`;frappe.ui.make_app_page=function(c){return c.parent.page=new frappe.ui.Page(c),c.parent.page};frappe.ui.pages={};frappe.ui.Page=class{constructor(e){$.extend(this,e),this.set_document_title=!0,this.buttons={},this.fields_dict={},this.views={},this.make(),frappe.ui.pages[frappe.get_route_str()]=this}make(){this.wrapper=$(this.parent),this.add_main_section(),this.setup_scroll_handler(),this.setup_sidebar_toggle()}setup_scroll_handler(){let e=0;$(window).scroll(frappe.utils.throttle(()=>{$(".page-head").toggleClass("drop-shadow",!!document.documentElement.scrollTop);let i=document.documentElement.scrollTop;i>0&&e<=i?$(".page-head").css("top","-15px"):$(".page-head").css("top","var(--navbar-height)"),e=i},500))}get_empty_state(e,i,t){return $(`<div class="page-card-container">
			<div class="page-card">
				<div class="page-card-head">
					<span class="indicator blue">
						${e}</span>
				</div>
				<p>${i}</p>
				<div>
					<button class="btn btn-primary btn-sm">${t}</button>
				</div>
			</div>
		</div>`)}load_lib(e){frappe.require(this.required_libs,e)}add_main_section(){$(frappe.render_template("page",{})).appendTo(this.wrapper),this.single_column?this.add_view("main",'<div class="row layout-main">					<div class="col-md-12 layout-main-section-wrapper">						<div class="layout-main-section">						<div class="page-head flex">						<div class="container">							<div class="row flex align-center page-head-content justify-between">								<div class="col-md-4 col-sm-6 col-xs-8 page-title">									<span class="sidebar-toggle-btn">										<svg class="icon icon-md sidebar-toggle-placeholder">											<use href="#icon-menu"></use>										</svg>										<span class="sidebar-toggle-icon">											<svg class="icon icon-md">												<use href="#icon-sidebar-collapse">												</use>											</svg>										</span>									</span>									<div class="flex fill-width title-area">										<div>											<div class="flex">												<h3 class="ellipsis title-text"></h3>												<span class="indicator-pill whitespace-nowrap"></span>											</div>											<div class="ellipsis sub-heading hide text-muted"></div>										</div>										<button class="btn btn-default more-button hide">											<svg class="icon icon-sm">												<use href="#icon-dot-horizontal">												</use>											</svg>										</button>									</div>								</div>								<div class="flex col page-actions justify-content-end">									<div class="custom-actions hide hidden-xs hidden-md"></div>									<div class="standard-actions flex">										<span class="page-icon-group hide hidden-xs hidden-sm"></span>										<div class="menu-btn-group hide">											<button type="button" class="btn btn-default icon-btn" data-toggle="dropdown" aria-expanded="false">												<span>													<span class="menu-btn-group-label">														<svg class="icon icon-sm">															<use href="#icon-dot-horizontal">															</use>														</svg>													</span>												</span>											</button>											<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>										</div>										<button class="btn btn-secondary btn-default btn-sm hide"></button>										<div class="actions-btn-group hide">											<button type="button" class="btn btn-primary btn-sm" data-toggle="dropdown" aria-expanded="false">												<span>													<span class="hidden-xs actions-btn-group-label">{%= __("Actions") %}</span>													<svg class="icon icon-xs">														<use href="#icon-select">														</use>													</svg>												</span>											</button>											<ul class="dropdown-menu dropdown-menu-right" role="menu">											</ul>										</div>										<button class="btn btn-primary btn-sm hide primary-action"></button>									</div>								</div>							</div>						</div>					</div>						</div>						<div class="layout-footer hide"></div>					</div>				</div>'):this.add_view("main",`
				<div class="row layout-main">
					<div class="col-lg-2 layout-side-section"></div>
					<div class="col layout-main-section-wrapper">
						<div class="page-head flex">
							<div class="container">
								<div class="row flex align-center page-head-content justify-between">
									<div class="col-md-4 col-sm-6 col-xs-8 page-title">
										<span class="sidebar-toggle-btn">
											<svg class="icon icon-md sidebar-toggle-placeholder">
												<use href="#icon-menu"></use>
											</svg>
											<span class="sidebar-toggle-icon">
												<svg class="icon icon-md">
													<use href="#icon-sidebar-collapse">
													</use>
												</svg>
											</span>
										</span>
										<div class="flex fill-width title-area">
											<div>
												<div class="flex">
													<h3 class="ellipsis title-text"></h3>
													<span class="indicator-pill whitespace-nowrap"></span>
												</div>
												<div class="ellipsis sub-heading hide text-muted"></div>
											</div>
											<button class="btn btn-default more-button hide">
												<svg class="icon icon-sm">
													<use href="#icon-dot-horizontal">
													</use>
												</svg>
											</button>
										</div>
									</div>
									<div class="flex col page-actions justify-content-end">
										<div class="custom-actions hide hidden-xs hidden-md"></div>
										<div class="standard-actions flex">
											<span class="page-icon-group hide hidden-xs hidden-sm"></span>
											<div class="menu-btn-group hide">
												<button type="button" class="btn btn-default icon-btn" data-toggle="dropdown" aria-expanded="false">
													<span>
														<span class="menu-btn-group-label">
															<svg class="icon icon-sm">
																<use href="#icon-dot-horizontal">
																</use>
															</svg>
														</span>
													</span>
												</button>
												<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>
											</div>
											<button class="btn btn-secondary btn-default btn-sm hide"></button>
											<div class="actions-btn-group hide">
												<button type="button" class="btn btn-primary btn-sm" data-toggle="dropdown" aria-expanded="false">
													<span>
														<span class="hidden-xs actions-btn-group-label">{%= __("Actions") %}</span>
														<svg class="icon icon-xs">
															<use href="#icon-select">
															</use>
														</svg>
													</span>
												</button>
												<ul class="dropdown-menu dropdown-menu-right" role="menu">
												</ul>
											</div>
											<button class="btn btn-primary btn-sm hide primary-action"></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="layout-main-section">
						</div>
						<div class="layout-footer hide"></div>
					</div>
				</div>
			`),this.setup_page()}setup_page(){this.$title_area=this.wrapper.find(".title-area"),this.$sub_title_area=this.wrapper.find("h6"),this.title&&this.set_title(this.title),this.icon&&this.get_main_icon(this.icon),this.body=this.main=this.wrapper.find(".layout-main-section"),this.container=this.wrapper.find(".page-body"),this.sidebar=this.wrapper.find(".layout-side-section"),this.footer=this.wrapper.find(".layout-footer"),this.indicator=this.wrapper.find(".indicator-pill"),this.page_actions=this.wrapper.find(".page-actions"),this.btn_primary=this.page_actions.find(".primary-action"),this.btn_secondary=this.page_actions.find(".btn-secondary"),this.menu=this.page_actions.find(".menu-btn-group .dropdown-menu"),this.menu_btn_group=this.page_actions.find(".menu-btn-group"),this.actions=this.page_actions.find(".actions-btn-group .dropdown-menu"),this.actions_btn_group=this.page_actions.find(".actions-btn-group"),this.standard_actions=this.page_actions.find(".standard-actions"),this.custom_actions=this.page_actions.find(".custom-actions"),this.page_form=$('<div class="page-form row hide"></div>').prependTo(this.main),this.inner_toolbar=this.custom_actions,this.icon_group=this.page_actions.find(".page-icon-group"),this.make_page&&this.make_page(),this.card_layout&&this.main.addClass("frappe-card");let e=this.menu_btn_group.find("button");e.attr("title",__("Menu")).tooltip({delay:{show:600,hide:100}}),frappe.ui.keys.get_shortcut_group(this.page_actions[0]).add(e,e.find(".menu-btn-group-label"));let i=this.actions_btn_group.find("button");frappe.ui.keys.get_shortcut_group(this.page_actions[0]).add(i,i.find(".actions-btn-group-label"))}setup_sidebar_toggle(){let e=$(".page-head").find(".sidebar-toggle-btn"),i=this.wrapper.find(".layout-side-section");this.disable_sidebar_toggle||!i.length?e.remove():(e.attr("title",__("Toggle Sidebar")).tooltip({delay:{show:600,hide:100},trigger:"hover"}),e.click(()=>{frappe.utils.is_xs()||frappe.utils.is_sm()?this.setup_overlay_sidebar():i.toggle(),$(document.body).trigger("toggleSidebar"),this.update_sidebar_icon()}))}setup_overlay_sidebar(){this.sidebar.find(".close-sidebar").remove();let e=this.sidebar.find(".overlay-sidebar").addClass("opened");$('<div class="close-sidebar">').hide().appendTo(this.sidebar).fadeIn();let i=$("html").css("overflow-y","hidden");this.sidebar.find(".close-sidebar").on("click",t=>this.close_sidebar(t)),this.sidebar.on("click","button:not(.dropdown-toggle)",t=>this.close_sidebar(t)),this.close_sidebar=()=>{i.css("overflow-y",""),this.sidebar.find("div.close-sidebar").fadeOut(()=>{e.removeClass("opened").find(".dropdown-toggle").removeClass("text-muted")})}}update_sidebar_icon(){let i=$(".page-head").find(".sidebar-toggle-btn").find(".sidebar-toggle-icon"),t=this.wrapper.find(".layout-side-section"),s=$(t).is(":visible");i.html(frappe.utils.icon(s?"sidebar-collapse":"sidebar-expand","md"))}set_indicator(e,i){this.clear_indicator().removeClass("hide").html(`<span>${e}</span>`).addClass(i)}add_action_icon(e,i,t="",s){let a=$(`
			<button class="text-muted btn btn-default ${t} icon-btn">
				${frappe.utils.icon(e)}
			</button>
		`);return a.appendTo(this.icon_group.removeClass("hide")),a.click(i),a.attr("title",__(s||frappe.unscrub(e))).tooltip({delay:{show:600,hide:100},trigger:"hover"}),a}clear_indicator(){return this.indicator.removeClass().addClass("indicator-pill whitespace-nowrap hide")}get_icon_label(e,i){let t=e,s="xs";return typeof e=="object"&&(t=e.icon,s=e.size||"xs"),`${e?frappe.utils.icon(t,s):""} <span class="hidden-xs"> ${__(i)} </span>`}set_action(e,i){let t=this;i.icon&&(i.label=this.get_icon_label(i.icon,i.label)),this.clear_action_of(e),e.removeClass("hide").prop("disabled",!1).html(i.label).on("click",function(){let a=i.click.apply(this,[e]);t.btn_disable_enable(e,a)}),i.working_label&&e.attr("data-working-label",i.working_label);let s=e.find("span");frappe.ui.keys.get_shortcut_group(this).add(e,s.length?s:e)}set_primary_action(e,i,t,s){return this.set_action(this.btn_primary,{label:e,click:i,icon:t,working_label:s}),this.btn_primary}set_secondary_action(e,i,t,s){return this.set_action(this.btn_secondary,{label:e,click:i,icon:t,working_label:s}),this.btn_secondary}clear_action_of(e){e.addClass("hide").unbind("click").removeAttr("data-working-label")}clear_primary_action(){this.clear_action_of(this.btn_primary)}clear_secondary_action(){this.clear_action_of(this.btn_secondary)}clear_actions(){this.clear_primary_action(),this.clear_secondary_action()}clear_custom_actions(){this.custom_actions.addClass("hide").empty()}clear_icons(){this.icon_group.addClass("hide").empty()}add_menu_item(e,i,t,s,a){return this.add_dropdown_item({label:e,click:i,standard:t,parent:this.menu,shortcut:s,show_parent:a})}add_custom_menu_item(e,i,t,s,a,n=null){return this.add_dropdown_item({label:i,click:t,standard:s,parent:e,shortcut:a,icon:n})}clear_menu(){this.clear_btn_group(this.menu)}show_menu(){this.menu_btn_group.removeClass("hide")}hide_menu(){this.menu_btn_group.addClass("hide")}show_icon_group(){this.icon_group.removeClass("hide")}hide_icon_group(){this.icon_group.addClass("hide")}show_actions_menu(){this.actions_btn_group.removeClass("hide")}hide_actions_menu(){this.actions_btn_group.addClass("hide")}add_action_item(e,i,t){return this.add_dropdown_item({label:e,click:i,standard:t,parent:this.actions})}add_actions_menu_item(e,i,t,s){return this.add_dropdown_item({label:e,click:i,standard:t,shortcut:s,parent:this.actions,show_parent:!1})}clear_actions_menu(){this.clear_btn_group(this.actions)}add_dropdown_item({label:e,click:i,standard:t,parent:s,shortcut:a,show_parent:n=!0,icon:p=null}){n&&s.parent().removeClass("hide hidden-xl");let r=this.is_in_group_button_dropdown(s,"li > a.grey-link > span",e);if(r)return r;let o,d="";if(p&&(d=`<span class="menu-item-icon">${frappe.utils.icon(p)}</span>`),a){let l=this.prepare_shortcut_obj(a,i,e);o=$(`
				<li>
					<a class="grey-link dropdown-item" href="#" onClick="return false;">
						${d}
						<span class="menu-item-label">${e}</span>
						<kbd class="pull-right">
							<span>${l.shortcut_label}</span>
						</kbd>
					</a>
				</li>
			`),frappe.ui.keys.add_shortcut(l)}else o=$(`
				<li>
					<a class="grey-link dropdown-item" href="#" onClick="return false;">
						${d}
						<span class="menu-item-label">${e}</span>
					</a>
				</li>
			`);return r=o.find("a").on("click",l=>((l.ctrlKey||l.metaKey)&&(frappe.open_in_new_tab=!0),i())),t?o.appendTo(s):(this.divider=s.find(".dropdown-divider"),this.divider.length||(this.divider=$('<li class="dropdown-divider user-action"></li>').prependTo(s)),o.addClass("user-action").insertBefore(this.divider)),frappe.ui.keys.get_shortcut_group(s.get(0)).add(r,r.find(".menu-item-label")),r}prepare_shortcut_obj(e,i,t){let s;return typeof e=="string"?s={shortcut:e}:s=e,frappe.utils.is_mac()?s.shortcut_label=s.shortcut.replace("Ctrl","\u2318"):s.shortcut_label=s.shortcut,s.shortcut=s.shortcut.toLowerCase(),s.action||(s.action=i),s.description||(s.description=t),s.page=this,s}is_in_group_button_dropdown(e,i,t){if(i||(i="li"),!t||!e)return!1;let s=`${i}[data-label="${encodeURIComponent(t)}"]`,a=$(e).find(s);return(a==null?void 0:a.length)>0&&a}clear_btn_group(e){e.empty(),e.parent().addClass("hide")}add_divider(){return $('<li class="dropdown-divider"></li>').appendTo(this.menu)}get_or_add_inner_group_button(e){var i=this.inner_toolbar.find(`.inner-group-button[data-label="${encodeURIComponent(e)}"]`);return i.length||(i=$(`<div class="inner-group-button" data-label="${encodeURIComponent(e)}">
					<button type="button" class="btn btn-default ellipsis" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						${e}
						${frappe.utils.icon("select","xs")}
					</button>
					<div role="menu" class="dropdown-menu"></div>
				</div>`).appendTo(this.inner_toolbar)),i}get_inner_group_button(e){return this.inner_toolbar.find(`.inner-group-button[data-label="${encodeURIComponent(e)}"]`)}set_inner_btn_group_as_primary(e){this.get_or_add_inner_group_button(e).find("button").removeClass("btn-default").addClass("btn-primary")}btn_disable_enable(e,i){i&&i.then?(e.prop("disabled",!0),i.then(()=>{e.prop("disabled",!1)})):i&&i.always&&(e.prop("disabled",!0),i.always(()=>{e.prop("disabled",!1)}))}add_inner_button(e,i,t,s="default"){var a=this;let n=function(){let d=$(this),l=i();a.btn_disable_enable(d,l)},p=t?`${t} > ${e}`:e;if(this.add_menu_item(p,n,!1,!1,!1).parent().addClass("hidden-xl"),this.menu_btn_group.hasClass("hide")&&this.menu_btn_group.removeClass("hide").addClass("hidden-xl"),t){var o=this.get_or_add_inner_group_button(t);if($(this.inner_toolbar).removeClass("hide"),!this.is_in_group_button_dropdown(o.find(".dropdown-menu"),"a",e))return $(`<a class="dropdown-item" href="#" onclick="return false;" data-label="${encodeURIComponent(e)}">${e}</a>`).on("click",n).appendTo(o.find(".dropdown-menu"))}else{let d=this.inner_toolbar.find(`button[data-label="${encodeURIComponent(e)}"]`);return d.length==0&&(d=$(`<button data-label="${encodeURIComponent(e)}" class="btn btn-${s} ellipsis">
					${__(e)}
				</button>`),d.on("click",n),d.appendTo(this.inner_toolbar.removeClass("hide"))),d}}remove_inner_button(e,i){if(typeof e=="string"&&(e=[e]),e=e.map(s=>__(s)),i){var t=this.get_inner_group_button(__(i));t.length&&t.find(`.dropdown-item[data-label="${encodeURIComponent(e)}"]`).remove(),t.find(".dropdown-item").length===0&&t.remove()}else this.inner_toolbar.find(`button[data-label="${encodeURIComponent(e)}"]`).remove()}change_inner_button_type(e,i,t){let s;if(i){var a=this.get_inner_group_button(__(i));a.length&&(s=a.find(`.dropdown-item[data-label="${encodeURIComponent(e)}"]`))}else s=this.inner_toolbar.find(`button[data-label="${encodeURIComponent(e)}"]`);s&&s.removeClass().addClass(`btn btn-${t} ellipsis`)}add_inner_message(e){let i=$(`<span class='inner-page-message text-muted small'>${e}</div>`);return this.inner_toolbar.find(".inner-page-message").remove(),this.inner_toolbar.removeClass("hide").prepend(i),i}clear_inner_toolbar(){this.inner_toolbar.empty().addClass("hide")}add_sidebar_item(e,i,t,s){var a=this.sidebar.find(".sidebar-menu.standard-actions"),n=$("<li>"),p=$("<a>").html(e).on("click",i).appendTo(n);return t?n.insertAfter(a.find(t)):s?n.prependTo(a):n.appendTo(a),p}clear_user_actions(){this.menu.find(".user-action").remove()}get_title_area(){return this.$title_area}set_title(e,i=null,t=!0,s=""){e||(e=""),t&&(e=strip_html(e)),this.title=e,frappe.utils.set_title(s||e),i&&(e=`${frappe.utils.icon(i)} ${e}`);let a=this.$title_area.find(".title-text");a.html(e),a.attr("title",this.title)}set_title_sub(e){this.$sub_title_area.html(e).toggleClass("hide",!e)}get_main_icon(e){return this.$title_area.find(".title-icon").html('<i class="'+e+' fa-fw"></i> ').toggle(!0)}add_help_button(e){}add_button(e,i,t){t||(t={});let s=$(`<button
			class="btn ${t.btn_class||"btn-default"} ${t.btn_size||"btn-sm"} ellipsis">
				${t.icon?frappe.utils.icon(t.icon):""}
				${e}
		</button>`);return this.add_menu_item(e,i,!1).parent().addClass("hidden-xl"),s.appendTo(this.custom_actions),s.on("click",i),this.custom_actions.removeClass("hide"),s}add_custom_button_group(e,i,t){let s=`<span class="hidden-xs">
			<span class="custom-btn-group-label">${__(e)}</span>
			${frappe.utils.icon("select","xs")}
		</span>`;i&&(s=`<span class="hidden-xs">
				${frappe.utils.icon(i)}
				<span class="custom-btn-group-label">${__(e)}</span>
				${frappe.utils.icon("select","xs")}
			</span>
			<span class="visible-xs">
				${frappe.utils.icon(i)}
			</span>`);let a=$(`
			<div class="custom-btn-group">
				<button type="button" class="btn btn-default btn-sm ellipsis" data-toggle="dropdown" aria-expanded="false">
					${s}
				</button>
				<ul class="dropdown-menu" role="menu"></ul>
			</div>
		`);return t||(t=this.custom_actions),t.removeClass("hide").append(a),a.find(".dropdown-menu")}add_dropdown_button(e,i,t,s){frappe.ui.toolbar.add_dropdown_button(e,i,t,s)}add_label(e){return this.show_form(),$("<label class='col-md-1 page-only-label'>"+e+" </label>").appendTo(this.page_form)}add_select(e,i){var t=this.add_field({label:e,fieldtype:"Select"});return t.$wrapper.find("select").empty().add_options(i)}add_data(e){var i=this.add_field({label:e,fieldtype:"Data"});return i.$wrapper.find("input").attr("placeholder",e)}add_date(e,i){var t=this.add_field({label:e,fieldtype:"Date",default:i});return t.$wrapper.find("input").attr("placeholder",e)}add_check(e){return $("<div class='checkbox'><label><input type='checkbox'>"+e+"</label></div>").appendTo(this.page_form).find("input")}add_break(){this.page_form.append('<div class="clearfix invisible-xs"></div>')}add_field(e,i){this.show_form(),e.placeholder||(e.placeholder=e.label),e.input_class="input-xs";var t=frappe.ui.form.make_control({df:e,parent:i||this.page_form,only_input:e.fieldtype!="Check"});if(t.refresh(),$(t.wrapper).addClass("col-md-2").attr("title",__(e.label)).tooltip({delay:{show:600,hide:100},trigger:"hover"}),e.fieldtype!="HTML")return t.$input||t.make_input(),t.$input.attr("placeholder",__(e.label)),e.fieldtype==="Check"&&$(t.wrapper).find(":first-child").removeClass("col-md-offset-4 col-md-8"),e.fieldtype=="Button"&&($(t.wrapper).find(".page-control-label").html("&nbsp;"),t.$input.addClass("btn-xs").css({width:"100%","margin-top":"-1px"})),e.default&&t.set_input(e.default),this.fields_dict[e.fieldname||e.label]=t,t}clear_fields(){this.page_form.empty()}show_form(){this.page_form.removeClass("hide")}hide_form(){this.page_form.addClass("hide")}get_form_values(){var e={};for(let i in this.fields_dict){let t=this.fields_dict[i];e[i]=t.get_value()}return e}add_view(e,i){let t=i;return typeof i=="string"&&(t=$(i)),this.views[e]=t.appendTo($(this.wrapper).find(".page-content")),this.current_view?this.views[e].toggle(!1):this.current_view=this.views[e],this.views[e]}set_view(e){this.current_view_name!==e&&(this.current_view&&this.current_view.toggle(!1),this.current_view=this.views[e],this.previous_view_name=this.current_view_name,this.current_view_name=e,this.views[e].toggle(!0),this.wrapper.trigger("view-change"))}};frappe.templates.workspace_sidebar_loading_skeleton=`<div class="workspace-sidebar-skeleton">
	<div class="widget-group-body">
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box child skeleton-card"></div>
		<div class="widget sidebar-box child skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
	</div>
	<div class="widget-group-body">
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box child skeleton-card"></div>
		<div class="widget sidebar-box child skeleton-card"></div>
		<div class="widget sidebar-box child skeleton-card"></div>
		<div class="widget sidebar-box child skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
		<div class="widget sidebar-box skeleton-card"></div>
	</div>
</div>`;localStorage.container_fullwidth=!0;window.frappe.language_switcher=c=>{frappe.call("common_theme.api.update_user_lang",{lang:c}).then(e=>{frappe.msgprint(__("Refreshing...")),window.location.reload()})};})();
//# sourceMappingURL=common_theme.bundle.UBMD7Q5U.js.map
