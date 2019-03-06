# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0] 2019-03-06

### Changed
- base MDL was changed from the original MDL by Google to the fork by eccenca, providing better configuration options

## [1.3.0-beta5] 2017-08-27

### Fixed
- Slow initiation with `upgradeAllRegistered` and `upgradeDom` by wrapping individual calls in `setTimeout`

## [1.3.0-beta4] 2017-08-27

### Changed
- Moved compiled javascript to root folder

## [1.3.0-beta3] 2017-08-27

### Fixed
- removed unnecessary `rgb()` around usage of color variables

## [1.3.0-beta2] 2017-08-27

### Fixed
- publish config of package (defaults to npm registry now)
- unquoting of colors

## [1.3.0-beta1] 2017-08-27

### Added
- Initial version:
    - Copy of mdl@1.3.0 with patches from `react-mdl`
    - Fixed mdl colors
