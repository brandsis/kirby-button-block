panel.plugin("brandsistency/button-block", {
	blocks: {
		button: {
			computed: {
				placeholder() {
					return "Button text...";
				},
				className() {
					let value = this.content.alignment;
					let className = value === 'center' ? 'txt-c' : value === 'right' ? 'txt-r' : ''; return className;
				}
			},
			template: `
				<button :class="className" type="button" @click="open">{{ content.text }}</button>
			`
		}
	}
});