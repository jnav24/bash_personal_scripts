import {Module} from 'vuex';
import {{{CLASSNAME}}StateInterface} from '@/store/modules/interfaces/{{FILENAME}}-state.interface';
import {RootStateInterface} from '@/store/modules/interfaces/root-state.interface';
import state from '@/store/modules/states/{{FILENAME}}.state';
import getters from '@/store/modules/getters/{{FILENAME}}.getter';
import actions from '@/store/modules/actions/{{FILENAME}}.action';
import mutations from '@/store/modules/mutations/{{FILENAME}}.mutation';

const {{CLASSNAME}}: Module<{{CLASSNAME}}StateInterface, RootStateInterface> = {
    state,
    getters,
    actions,
    mutations,
};

export default {{CLASSNAME}};