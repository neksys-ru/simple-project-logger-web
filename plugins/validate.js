
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';
import ru from 'vee-validate/dist/locale/ru.json'




Object.keys(rules).forEach(rule => {
    extend(rule,{
        ...rules[rule],
        message:ru.messages[rule]
    });
});
//
// Vue.component('ValidationObserver',ValidationObserver);
// Vue.component('ValidationProvider',ValidationProvider);

