export class Project {
    constructor(title, description, repoURL, iconURL) {
        this.title = String(title);
        this.repoURL = repoURL;
        this.iconURL = iconURL;
        this.description = description;
    }
}