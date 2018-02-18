module.exports = Marionette.ItemView.extend( {
	template: '#tmpl-elementor-template-library-header-actions',

	id: 'elementor-template-library-header-actions',

	ui: {
		'import': '#elementor-template-library-header-import i',
		sync: '#elementor-template-library-header-sync i',
		save: '#elementor-template-library-header-save i'
	},

	events: {
		'click @ui.import': 'onImportClick',
		'click @ui.sync': 'onSyncClick',
		'click @ui.save': 'onSaveClick'
	},

	onImportClick: function() {
		elementor.templates.getLayout().showImportView();
	},

	onSyncClick: function() {
		var self = this;

		self.ui.sync.addClass( 'eicon-animation-spin' );

		elementor.templates.requestLibraryData( function() {
			self.ui.sync.removeClass( 'eicon-animation-spin' );

			elementor.templates.setTemplatesSource( elementor.templates.getFilter( 'source' ) );
		}, true, true );
	},

	onSaveClick: function() {
		elementor.templates.getLayout().showSaveTemplateView();
	}
} );
