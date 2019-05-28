## Features
### Logging
- Added base logging system a task & statuses  [``` ba1e7ee ```](https://github.com/keindev/changelog-guru/commit/ba1e7eeb4ac0c12044cbbe4ba17337add9f4bef1)
- Rethought class "Process"  [``` 9fee65e ```](https://github.com/keindev/changelog-guru/commit/9fee65edb1367e2d7a0ef914612f08bfd92b409b)
- Changes in the process of logging task states  [``` b40e13f ```](https://github.com/keindev/changelog-guru/commit/b40e13f2cde4fb283ecad8ab4e960fd0581dfca7)
- Added task loging to Providers & conf readers  [``` da4a964 ```](https://github.com/keindev/changelog-guru/commit/da4a9648e347355c44bb624dc4ffd3329309b302)
- Added information methods to Task, fix some bugs with display tree  [``` 54b4952 ```](https://github.com/keindev/changelog-guru/commit/54b49526b1ac69bbf8c3b42cad840c01f6743ea9)
### Debug mode
- Added debug loging for State & Reader  [``` 0e9f10c ```](https://github.com/keindev/changelog-guru/commit/0e9f10c025b094fc2ca84c5c4f2adda7921f511e)
- Added debug loging for IO, Entities & Middleware  [``` 7ae4e11 ```](https://github.com/keindev/changelog-guru/commit/7ae4e11d0956f95282e65c93daf829db78ed35c0)
- Added Entity class for better debug  [``` 777e32a ```](https://github.com/keindev/changelog-guru/commit/777e32a9082549e46c7bb6390af7bc2ca6949c4b)
### Subsections & Groups
- **[Section]** Added new SectionBlock type - Group  [``` e1e837c ```](https://github.com/keindev/changelog-guru/commit/e1e837ccf41fd543af77bf2595bca97adfecb0d7)
### Others
- **[Plugins]** Added Sign plugin  [``` 18cb21e ```](https://github.com/keindev/changelog-guru/commit/18cb21e45693d68e6cc499aac72882d91161fac2)
- **[Plugins]** Added Sign plugin parse method  [``` 3a5fb46 ```](https://github.com/keindev/changelog-guru/commit/3a5fb46755f9f12dd38142187f88eac7d3b81a99)
- **[Plugins]** Added Sing plugin modify method  [``` b18496d ```](https://github.com/keindev/changelog-guru/commit/b18496da836d33acb38e148032716e5abe374036)
- Add repo state reader  [``` eb1466d ```](https://github.com/keindev/changelog-guru/commit/eb1466da10729a4753fd936a9948551f76bd6e8a)
- Rewrite to typescript  [``` fde81be ```](https://github.com/keindev/changelog-guru/commit/fde81bef20850e326cdc4651015f7473a136b623)
- Add author & commit entities  [``` a6dfb6d ```](https://github.com/keindev/changelog-guru/commit/a6dfb6d6660ef32662a429fb470b34adbe1840d4)
- Adding plugin logic, configuration file changes  [``` 79a0c77 ```](https://github.com/keindev/changelog-guru/commit/79a0c77d6d8a04af0018288d68bfda06ab5da82c)
- Added plugins  [``` 6a54a1c ```](https://github.com/keindev/changelog-guru/commit/6a54a1cc5268f6ff14c6ecb2de66baa19c5d430a)
- Rework Reader & State  [``` 867fdad ```](https://github.com/keindev/changelog-guru/commit/867fdad66ab75b656a350e9a507410312a251ace)
- Added Plugins  call for handling Сommits  [``` 2753240 ```](https://github.com/keindev/changelog-guru/commit/27532404adba5d198f700e63054a1abe0b8120a9)
- Added Scope & Section plugins  [``` cd67e94 ```](https://github.com/keindev/changelog-guru/commit/cd67e94d5a6d4222631dab60540099f1497683e3)
- Added Section block & position enums  [``` 02c813c ```](https://github.com/keindev/changelog-guru/commit/02c813ce9e60859714358df21e9d1cd39ea18372)
- Added Section & Commit managers  [``` 13aa1e2 ```](https://github.com/keindev/changelog-guru/commit/13aa1e2053a0fa3de4b29c6f3a74b8557d1a98f4)
- Reworked plugins, added a Levenshtein distance compare algorithm  [``` 6c45621 ```](https://github.com/keindev/changelog-guru/commit/6c456218d0a6ccd698e56e3cb1f024e56db57844)
- Add sections tree & commit list render  [``` 9d3bc70 ```](https://github.com/keindev/changelog-guru/commit/9d3bc7004cb591eb3c5db11b5d4c3fec5540b2cb)
## Bug Fixes
- **[Section,State]** Add commit tree generation method  [``` 6c819c8 ```](https://github.com/keindev/changelog-guru/commit/6c819c80096fd1276185ad5d5180ada3965500e9)
- **[State]** Added section list sorting after modify with plugins  [``` f85afda ```](https://github.com/keindev/changelog-guru/commit/f85afda8443a3a593dbc3220da8a78ea007a209c)
- Rewrite reader, test github api  [``` dfea14d ```](https://github.com/keindev/changelog-guru/commit/dfea14d54f3a44d29bf943ea9a138538a5d7f2ae)
- Rewrite reader, test github api  [``` a5b847f ```](https://github.com/keindev/changelog-guru/commit/a5b847fc992182e3377a49d7777f2d22eb3f05ef)
- Add author avatar size  [``` f2107a2 ```](https://github.com/keindev/changelog-guru/commit/f2107a21143370f69a1edd965e2354d040456512)
- Added missing Commit type  [``` 0ceac52 ```](https://github.com/keindev/changelog-guru/commit/0ceac527bef36747930de4e91df52acd46017cdd)
- Fixed commit parsing  [``` 8de6944 ```](https://github.com/keindev/changelog-guru/commit/8de6944e8ac88bc96b8a3e83117ac506f36e7736)
- Fixed regular expressions  [``` 4529371 ```](https://github.com/keindev/changelog-guru/commit/452937153e7cd3582002c1538af00bfd23e37eed)
- Fixed parsing & modify commits  [``` 3125893 ```](https://github.com/keindev/changelog-guru/commit/3125893812639b832e1933bec6eb616e7de62f54)
- Spinner rotation bug fixed  [``` 5df31f1 ```](https://github.com/keindev/changelog-guru/commit/5df31f15da9d59bd71ea67d89ad7b628786589e9)
- Add version information from package and last release  [``` 3ba83c8 ```](https://github.com/keindev/changelog-guru/commit/3ba83c818ecd0566f077b969a05c3de2279803dc)
- Pkg version management  [``` 41b7652 ```](https://github.com/keindev/changelog-guru/commit/41b7652a3fcab0d0e812e91745897e82300b2495)
- Add writer, fix state tree  [``` 4a792a4 ```](https://github.com/keindev/changelog-guru/commit/4a792a4e0b487611611962cd60861b794d5e0562)
- Add commit ref in output  [``` 0bd34b4 ```](https://github.com/keindev/changelog-guru/commit/0bd34b47bfe986e95f2f04abc3702773fcf9558c)
- Add commit links & "Contributors" section  [``` 2764e83 ```](https://github.com/keindev/changelog-guru/commit/2764e83b47d9c0ed0a3ca7848476bda28e5f17c9)
## Internal сhanges
- **[Author]** Сhanged the size parameter modification method  [``` 4e88a69 ```](https://github.com/keindev/changelog-guru/commit/4e88a6906d363e24d8a4ccec6211906bf5825658)
- **[Package]** Update dependencies  [``` 54e6330 ```](https://github.com/keindev/changelog-guru/commit/54e63302f890edb007dd3a5911d6ae08ad62134f)
- Add .editorconfig & dependencies  [``` 99c5204 ```](https://github.com/keindev/changelog-guru/commit/99c5204c7f1816a0aac980ff56aa2c0573cb437a)
- Work on commit message template struct  [``` ad62093 ```](https://github.com/keindev/changelog-guru/commit/ad62093ee283cbf772724be6779935951a57bb17)
- Fix path to src in lint command  [``` 6629b89 ```](https://github.com/keindev/changelog-guru/commit/6629b89b82ce9262929938e8548fd884c2af13d3)
- Added VS settings, fix configs, update dependencies  [``` 77fb627 ```](https://github.com/keindev/changelog-guru/commit/77fb62753b6e7f634805215b7253c39b8947fc48)
- Added husky dependence  [``` 9c1316b ```](https://github.com/keindev/changelog-guru/commit/9c1316bc9ea7f8cc0e8234ca6b2e713015b71b98)
- Added "cd" type  [``` 8bbb2a6 ```](https://github.com/keindev/changelog-guru/commit/8bbb2a612fe2a8f52beb374c16a2d8972bc77893)
- Removed husky cfg from pkg  [``` dec55ae ```](https://github.com/keindev/changelog-guru/commit/dec55ae96d4020ddae99d521bcd7f86fbfc39ad7)
- Added debug command, added prettier, update dependencies  [``` efc9058 ```](https://github.com/keindev/changelog-guru/commit/efc9058577e69eea9bc701c6b09931f8a22dd2d6)
- Added debug config for vsc  [``` 683d359 ```](https://github.com/keindev/changelog-guru/commit/683d359880688c43de98a706f272107187df3023)
- Changed husky hooks  [``` 93e92d3 ```](https://github.com/keindev/changelog-guru/commit/93e92d38234536a06423894a761e243915f05d6a)
## Code Refactoring
### Refactoring
- Reworked plugins, fix some a linter errors  [``` bdb7a0a ```](https://github.com/keindev/changelog-guru/commit/bdb7a0a9cbc57c5aee3ad3b7785f4bb1be5e2c93)
- Ended last part of global refactoring  [``` 17deb35 ```](https://github.com/keindev/changelog-guru/commit/17deb35c2e0f7b5388e97b2fb993debeb73cf72d)
### Pkg refactoring
- Reworked changelog building process  [``` 6c0187b ```](https://github.com/keindev/changelog-guru/commit/6c0187bca88a0d0b68767c7ceb894c7b8e105c94)
### Others
- Rework reader structure, add git & cli classes  [``` 187d35d ```](https://github.com/keindev/changelog-guru/commit/187d35dc1436afaa290a4a7cda4926e6eebd0c26)
- Add linter, begin fix lint errors  [``` 6f6c614 ```](https://github.com/keindev/changelog-guru/commit/6f6c614cc5b0d700d8725a6ceeb2b4519be8b6a4)
- Lint free code, rework classes model  [``` c45d7f3 ```](https://github.com/keindev/changelog-guru/commit/c45d7f3aed91bb54886f21c57cf22296418c072d)
- Rebuild src struct, configure ts transpile  [``` 099bbec ```](https://github.com/keindev/changelog-guru/commit/099bbec3d0240870db4cfabb006a958c032e2d61)
- Completed the transition to the TS  [``` 1ba6a1e ```](https://github.com/keindev/changelog-guru/commit/1ba6a1e9ffb7ac6d4824005213b85f6f9e6bf5ab)
- Change config file struct  [``` cd8449e ```](https://github.com/keindev/changelog-guru/commit/cd8449e71e896be695c7bb8497b068d693a56db0)
- Fix lint & tsc errors  [``` 90efe99 ```](https://github.com/keindev/changelog-guru/commit/90efe997e7b8669d3e9a4e7239d3d9e7e61058b9)
- Change Scope & Section plugins creation  [``` 35536c1 ```](https://github.com/keindev/changelog-guru/commit/35536c131a08bfef67aa07244cde76183ff70240)
- Refactor Entities  [``` 2e6d122 ```](https://github.com/keindev/changelog-guru/commit/2e6d12275c2141337aab1c1af7a5b73b45b48ef0)
## Reverts
## Performance Improvements
## Important Internal Changes
## DEPRECATIONS
## BREAKING CHANGES
---
## Contributors
[![[object Object]](https://avatars3.githubusercontent.com/u/4527292?v=4&size=40)](https://github.com/keindev)