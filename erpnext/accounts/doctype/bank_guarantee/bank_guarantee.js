// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bank Guarantee', {
	refresh: function(frm) {
		cur_frm.set_query("account_name", function() {
			return {
				"filters": {
					"account_type": "Bank",
					"is_group": 0
				}
			};
		});
		cur_frm.set_query("project", function() {
			return {
				"filters": {
					"customer": cur_frm.doc.customer
				}
			};
		});
	},
	start_date: function(frm) {
		end_date = frappe.datetime.add_days(cur_frm.doc.start_date, cur_frm.doc.validity - 1);
		cur_frm.set_value("end_date", end_date);
	},
	validity: function(frm) {
		end_date = frappe.datetime.add_days(cur_frm.doc.start_date, cur_frm.doc.validity - 1);
		cur_frm.set_value("end_date", end_date);
	}
});

// $.extend(cur_frm.cscript, {
// 	start_date: function(doc, dt, dn) {
// 		var me = this;
// 		end_date =
// 			frappe.datetime.add_days(this.frm.doc.start_date, this.frm.doc.validity - 1);
// 		this.frm.set_value("end_date", end_date);
// 	},
// 	validity: function(doc, dt, dn) {
// 		var me = this;
// 		end_date =
// 			frappe.datetime.add_days(this.frm.doc.start_date, this.frm.doc.validity - 1);
// 		this.frm.set_value("end_date", end_date);
// 	}
// });