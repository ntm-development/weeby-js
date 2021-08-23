const sidebar = {
	'/docs/': [
		'intro',
		'functions',
		{
			title: 'Guide',
			collapsable: true,
			children: [
				'/docs/guide/setup', 
				'/docs/guide/authentication',
				'/docs/guide/examples',
				'/docs/guide/contributing',
				'/docs/guide/support',
				'/docs/guide/quicklinks',
				'/docs/guide/license',
			]
		},
		{
			title: 'Classes',
			collapsable: true,
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