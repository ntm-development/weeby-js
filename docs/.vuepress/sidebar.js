const sidebar = {
	'/docs/': [
		'intro',
		'functions',
		{
			title: 'Guide',
			collapsable: false,
			children: [
				'/docs/guide/setup', 
				'/docs/guide/authentication',
				'/docs/guide/examples',
				'/docs/guide/quicklinks',
				'/docs/guide/license',
			]
		},
		{
			title: 'Classes',
			collapsable: false,
			children: [
				'/docs/class/client',
				'/docs/class/custom',
				'/docs/class/effects',
				'/docs/class/generators',
				'/docs/class/gif',
				'/docs/class/json',
				'/docs/class/overlays',
			]
		}
	]
}

module.exports = sidebar;