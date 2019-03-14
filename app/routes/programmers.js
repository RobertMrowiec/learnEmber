import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Robert Mrowiec', 'Daniel Szczepanik', 'Rudy Jakup']
    }
});
