import * as React from "react";
import { render, screen } from "@testing-library/react";
import SearchList from "../../components/SearchList";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

const dummyData = {
    "data": [
        {
            "id": 94367677,
            "node_id": "MDEwOlJlcG9zaXRvcnk5NDM2NzY3Nw==",
            "name": "formik",
            "full_name": "formium/formik",
            "private": false,
            "owner": {
                "login": "formium",
                "id": 50745844,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjUwNzQ1ODQ0",
                "avatar_url": "https://avatars.githubusercontent.com/u/50745844?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/formium",
                "html_url": "https://github.com/formium",
                "followers_url": "https://api.github.com/users/formium/followers",
                "following_url": "https://api.github.com/users/formium/following{/other_user}",
                "gists_url": "https://api.github.com/users/formium/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/formium/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/formium/subscriptions",
                "organizations_url": "https://api.github.com/users/formium/orgs",
                "repos_url": "https://api.github.com/users/formium/repos",
                "events_url": "https://api.github.com/users/formium/events{/privacy}",
                "received_events_url": "https://api.github.com/users/formium/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/formium/formik",
            "description": "Build forms in React, without the tears 😭 ",
            "fork": false,
            "url": "https://api.github.com/repos/formium/formik",
            "forks_url": "https://api.github.com/repos/formium/formik/forks",
            "keys_url": "https://api.github.com/repos/formium/formik/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/formium/formik/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/formium/formik/teams",
            "hooks_url": "https://api.github.com/repos/formium/formik/hooks",
            "issue_events_url": "https://api.github.com/repos/formium/formik/issues/events{/number}",
            "events_url": "https://api.github.com/repos/formium/formik/events",
            "assignees_url": "https://api.github.com/repos/formium/formik/assignees{/user}",
            "branches_url": "https://api.github.com/repos/formium/formik/branches{/branch}",
            "tags_url": "https://api.github.com/repos/formium/formik/tags",
            "blobs_url": "https://api.github.com/repos/formium/formik/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/formium/formik/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/formium/formik/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/formium/formik/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/formium/formik/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/formium/formik/languages",
            "stargazers_url": "https://api.github.com/repos/formium/formik/stargazers",
            "contributors_url": "https://api.github.com/repos/formium/formik/contributors",
            "subscribers_url": "https://api.github.com/repos/formium/formik/subscribers",
            "subscription_url": "https://api.github.com/repos/formium/formik/subscription",
            "commits_url": "https://api.github.com/repos/formium/formik/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/formium/formik/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/formium/formik/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/formium/formik/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/formium/formik/contents/{+path}",
            "compare_url": "https://api.github.com/repos/formium/formik/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/formium/formik/merges",
            "archive_url": "https://api.github.com/repos/formium/formik/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/formium/formik/downloads",
            "issues_url": "https://api.github.com/repos/formium/formik/issues{/number}",
            "pulls_url": "https://api.github.com/repos/formium/formik/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/formium/formik/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/formium/formik/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/formium/formik/labels{/name}",
            "releases_url": "https://api.github.com/repos/formium/formik/releases{/id}",
            "deployments_url": "https://api.github.com/repos/formium/formik/deployments",
            "created_at": "2017-06-14T19:50:59Z",
            "updated_at": "2021-08-23T01:23:49Z",
            "pushed_at": "2021-08-20T15:33:13Z",
            "git_url": "git://github.com/formium/formik.git",
            "ssh_url": "git@github.com:formium/formik.git",
            "clone_url": "https://github.com/formium/formik.git",
            "svn_url": "https://github.com/formium/formik",
            "homepage": "https://formik.org",
            "size": 8633,
            "stargazers_count": 28055,
            "watchers_count": 28055,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": false,
            "forks_count": 2284,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 599,
            "license": {
                "key": "apache-2.0",
                "name": "Apache License 2.0",
                "spdx_id": "Apache-2.0",
                "url": "https://api.github.com/licenses/apache-2.0",
                "node_id": "MDc6TGljZW5zZTI="
            },
            "forks": 2284,
            "open_issues": 599,
            "watchers": 28055,
            "default_branch": "master",
            "score": 1
        },
        {
            "id": 121948740,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMjE5NDg3NDA=",
            "name": "formik-material-ui",
            "full_name": "stackworx/formik-material-ui",
            "private": false,
            "owner": {
                "login": "stackworx",
                "id": 26720267,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjI2NzIwMjY3",
                "avatar_url": "https://avatars.githubusercontent.com/u/26720267?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/stackworx",
                "html_url": "https://github.com/stackworx",
                "followers_url": "https://api.github.com/users/stackworx/followers",
                "following_url": "https://api.github.com/users/stackworx/following{/other_user}",
                "gists_url": "https://api.github.com/users/stackworx/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/stackworx/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/stackworx/subscriptions",
                "organizations_url": "https://api.github.com/users/stackworx/orgs",
                "repos_url": "https://api.github.com/users/stackworx/repos",
                "events_url": "https://api.github.com/users/stackworx/events{/privacy}",
                "received_events_url": "https://api.github.com/users/stackworx/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/stackworx/formik-material-ui",
            "description": "Bindings for using Formik with Material-UI",
            "fork": false,
            "url": "https://api.github.com/repos/stackworx/formik-material-ui",
            "forks_url": "https://api.github.com/repos/stackworx/formik-material-ui/forks",
            "keys_url": "https://api.github.com/repos/stackworx/formik-material-ui/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/stackworx/formik-material-ui/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/stackworx/formik-material-ui/teams",
            "hooks_url": "https://api.github.com/repos/stackworx/formik-material-ui/hooks",
            "issue_events_url": "https://api.github.com/repos/stackworx/formik-material-ui/issues/events{/number}",
            "events_url": "https://api.github.com/repos/stackworx/formik-material-ui/events",
            "assignees_url": "https://api.github.com/repos/stackworx/formik-material-ui/assignees{/user}",
            "branches_url": "https://api.github.com/repos/stackworx/formik-material-ui/branches{/branch}",
            "tags_url": "https://api.github.com/repos/stackworx/formik-material-ui/tags",
            "blobs_url": "https://api.github.com/repos/stackworx/formik-material-ui/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/stackworx/formik-material-ui/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/stackworx/formik-material-ui/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/stackworx/formik-material-ui/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/stackworx/formik-material-ui/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/stackworx/formik-material-ui/languages",
            "stargazers_url": "https://api.github.com/repos/stackworx/formik-material-ui/stargazers",
            "contributors_url": "https://api.github.com/repos/stackworx/formik-material-ui/contributors",
            "subscribers_url": "https://api.github.com/repos/stackworx/formik-material-ui/subscribers",
            "subscription_url": "https://api.github.com/repos/stackworx/formik-material-ui/subscription",
            "commits_url": "https://api.github.com/repos/stackworx/formik-material-ui/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/stackworx/formik-material-ui/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/stackworx/formik-material-ui/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/stackworx/formik-material-ui/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/stackworx/formik-material-ui/contents/{+path}",
            "compare_url": "https://api.github.com/repos/stackworx/formik-material-ui/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/stackworx/formik-material-ui/merges",
            "archive_url": "https://api.github.com/repos/stackworx/formik-material-ui/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/stackworx/formik-material-ui/downloads",
            "issues_url": "https://api.github.com/repos/stackworx/formik-material-ui/issues{/number}",
            "pulls_url": "https://api.github.com/repos/stackworx/formik-material-ui/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/stackworx/formik-material-ui/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/stackworx/formik-material-ui/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/stackworx/formik-material-ui/labels{/name}",
            "releases_url": "https://api.github.com/repos/stackworx/formik-material-ui/releases{/id}",
            "deployments_url": "https://api.github.com/repos/stackworx/formik-material-ui/deployments",
            "created_at": "2018-02-18T12:13:57Z",
            "updated_at": "2021-08-22T15:30:09Z",
            "pushed_at": "2021-08-21T10:39:49Z",
            "git_url": "git://github.com/stackworx/formik-material-ui.git",
            "ssh_url": "git@github.com:stackworx/formik-material-ui.git",
            "clone_url": "https://github.com/stackworx/formik-material-ui.git",
            "svn_url": "https://github.com/stackworx/formik-material-ui",
            "homepage": "https://stackworx.github.io/formik-material-ui",
            "size": 12283,
            "stargazers_count": 803,
            "watchers_count": 803,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 115,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 33,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 115,
            "open_issues": 33,
            "watchers": 803,
            "default_branch": "master",
            "score": 1
        }
    ]
}
describe("Search List components unit testing", () => {
    test("Check rendering", () => {
        render(<SearchList data={dummyData.data}/>);

        expect(screen.getByText("formium/formik")).toBeInTheDocument();

    });

    test("Checking if the list elements exits", () => {
        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <SearchList data={dummyData.data} selectItem={1}/>
            </Router>);

        const elem = screen.getByText("formium/formik");

        expect(elem).toHaveTextContent("formium/formik");
        
        userEvent.click(elem);
        expect((history as any).length).toBeGreaterThan(0);
    })
})