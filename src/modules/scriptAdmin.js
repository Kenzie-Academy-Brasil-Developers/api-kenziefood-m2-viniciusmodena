import { Modal   } from '../modules/modalAdmin.js';
import { Api     } from "../controller/api.js";
import { Vitrine } from './admin.js';

Vitrine.vitrine.addEventListener('click',Vitrine.rgtProduct);
Vitrine.vitrine.addEventListener('click',Vitrine.dltProduct);
Vitrine.vitrine.addEventListener('click',Vitrine.edtProduct);