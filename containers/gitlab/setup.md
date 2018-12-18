1. Create config file for runner:
   - (sudo) mkdir /srv/gitlab-runner && touch /srv/gitlab-runner/config.toml

2. Start container:
   - docker-compose up

3. Register runner:
   - docker exec -ti <name of runner container> gitlab-runner register
     Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
     http://<name of gitlab container>:30080/ci
     Please enter the gitlab-ci token for this runner:
     <token>
     Please enter the gitlab-ci description for this runner:
     whatever
     Please enter the gitlab-ci tags for this runner (comma separated):
     tag1, tag2, tag3

   - choose executor and setup ssh (directory: /home/gitlab-runner)
   - add builds_dir = "/builds" to /srv/gitlab-runner/config.toml ([[runners]] section)
   - add clone_url = "http://192.168.0.35:30080" to /srv/gitlab-runner/config.toml ([[runners]] section