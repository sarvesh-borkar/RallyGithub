Ext.define('changeset.ui.ChangesetFilesGrid', {
    extend: 'Rally.ui.grid.Grid',
    alias: 'widget.changesetfilesgrid',
    cls: 'changeset-files-grid',
    storeConfig: {
        fetch: true,
        sorters: [{
            property: 'filename',
            direction: 'ASC'
        }]
    },
    columnCfgs: [{
        header: 'Status',
        dataIndex: 'status',
        renderer: function(value) {
            return Ext.String.capitalize(value.substring(0,3));
        },
        width: 50
    },{
        header: 'File',
        xtype: 'templatecolumn',
        tpl: '<a href="{url}">{filename}</a>',
        flex: 1
    },{
        header: 'Changes',
        dataIndex: 'changes',
        width: 60
    },{
        header: 'Additions',
        dataIndex: 'additions',
        width: 60
    },{
        header: 'Deletions',
        dataIndex: 'deletions',
        width: 60
    }],

    constructor: function(config) {
        config = config || {};
        Ext.applyIf(config, {
            columnCfgs: this.columnCfgs,
            storeConfig: this.storeConfig
        });

        this.callParent([config]);
    }
});