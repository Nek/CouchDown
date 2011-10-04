function(doc, req) {
    var Mustache = require("vendor/couchapp/lib/mustache");
    var Path = require("vendor/couchapp/lib/path").init(req);
    var stash = {
        content: escape(doc.content),
        title: doc._id,
        rev: doc._rev,
        asset_path: Path.asset()
    };
    return Mustache.to_html(this.templates.editor, stash);
}