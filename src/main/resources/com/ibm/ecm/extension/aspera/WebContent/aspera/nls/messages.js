/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

define({
	root:
	({
		// NLS_CHARSET=UTF-8

		// configuration
		configuration_pane_aspera_url: "IBM Aspera server URL",
		configuration_pane_aspera_url_hover: "Enter the URL of the IBM Aspera server. For example: https://host_name:port_number/aspera/faspex",
		configuration_pane_aspera_url_prompt: "It is highly recommended that you use the HTTPS protocol.",
		configuration_pane_max_docs_to_send: "Maximum number of items to send",
		configuration_pane_max_docs_to_send_hover: "Specify the maximum number of items that users can send at a time.",
		configuration_pane_max_procs_to_send: "Maximum number of concurrent requests",
		configuration_pane_max_procs_to_send_hover: "Specify the maximum number of requests that can be running at the same time.",
		configuration_pane_target_transfer_rate: "Target transfer rate (in Mbps)",
		configuration_pane_target_transfer_rate_hover: "Specify the target transfer rate in megabits per second. The rate is limited by the license.",
		configuration_pane_speed_info: "Your current entry-level license is for 20 Mbps. Upgrade to a faster evaluation license (up to 10 Gbps) for Aspera Faspex by requesting it on the <a target='_blank' href='https://ibm.biz/BdjYHq'>Aspera Evaluation Request</a> page.",

		// runtime
		send_dialog_sender_title: "Sender: ${0}",
		send_dialog_not_set: "Not set",
		send_dialog_send_one: "Send '${0}'.",
		send_dialog_send_more: "Send ${0} files.",
		send_dialog_sender: "User name:",
		send_dialog_password: "Password:",
		send_dialog_missing_sender_message: "You must enter a user name to log into the IBM Aspera server.",
		send_dialog_missing_password_message: "You must enter a password to log into the IBM Aspera server.",
		send_dialog_title: "Send via IBM Aspera",
		send_dialog_missing_title_message: "You must enter a title.",
		send_dialog_info: "Send files via the IBM Aspera server and notify users that the files are available for download.",
		send_dialog_recipients_label: "Recipients:",
		send_dialog_recipients_textfield_hover_help: "Use a comma to separate email addresses and/or user names. For example, enter 'address1, address2, username1, username2'.",
		send_dialog_missing_recipients_message: "You must specify at least one email address or user name.",
		send_dialog_title_label: "Title:",
		send_dialog_note_label: "Add a message.",
		send_dialog_earPassword_label: "Encryption password:",
		send_dialog_earPassword_textfield_hover_help: "Enter a password to encrypt the files on the server. Subsequently, recipients will be required to enter the password to decrypt protected files as they are being downloaded.",
		send_dialog_notify_title: "Notification: ${0}",
		send_dialog_notifyOnUpload_label: "Notify me when the file is uploaded",
		send_dialog_notifyOnDownload_label: "Notify me when the file is downloaded",
		send_dialog_notifyOnUploadDownload: "Notify me when the file is uploaded and downloaded",
		send_dialog_send_button_label: "Send",
		send_dialog_started: "The package ${0} is being sent.",
		status_started: "Package status: ${0} - In progress (${1}%)",
		status_stopped: "Package status: ${0} - Stopped",
		status_failed: "Package status: ${0} - Failed",
		status_completed: "Package status: ${0} - Completed",

		// error
		send_dialog_too_many_items_error: "The items cannot be sent.",
		send_dialog_too_many_items_error_explanation: "You can send up to ${0} items at a time. You are trying to send ${1} items.",
		send_dialog_too_many_items_error_userResponse: "Select fewer items and try to send the items again. You can also contact your system administrator to increase the maximum number of items that you can send at one time.",
		send_dialog_too_many_items_error_0: "maximum_number_of_items",
		send_dialog_too_many_items_error_1: "number_of_items",
		send_dialog_too_many_items_error_number: 5050,
	})
	//	"ar": true,
	//	"bg": true,
	//	"ca": true,
	//	"cs": true,
	//	"da": true,
	//	"de": true,
	//	"el": true,
	//	"es": true,
	//	"fi": true,
	//	"fr": true,
	//	"he": true,
	//	"hr": true,
	//	"hu": true,
	//	"it": true,
	//	"iw": true,
	//	"ja": true,
	//	"kk": true,
	//	"ko": true,
	//	"nb-no": true,
	//	"nl": true,
	//	"no": true,
	//	"pl": true,
	//	"pt": true,
	//	"pt-br": true,
	//	"ru": true,
	//	"sk": true,
	//	"sl": true,
	//	"sv": true,
	//	"th": true,
	//	"tr": true,
	//	"zh": true,
	//	"zh-tw": true,
	//	"ro": true,
	//	"vi": true
});
