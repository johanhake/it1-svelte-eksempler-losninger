// Kommenter inn den komponenten du vill skal vises.

import App from './eksempel/KomIgang.svelte';
// import App from './eksempel/BindeVerdierFraInput.svelte';
// import App from './eksempel/If-TesterLøkker.svelte';
// import App from './eksempel/KomponenterMedProps.svelte';

// import App from './løsningsforslag/Oppgaver-1-4.svelte';
// import App from './løsningsforslag/Oppgaver-5-9.svelte';
// import App from './løsningsforslag/Oppgaver-10-11.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});

export default app;