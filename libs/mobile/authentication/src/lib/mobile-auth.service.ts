import { Injectable } from '@angular/core';
import {BrowserVault, Vault, VaultType} from '@ionic-enterprise/identity-vault';


@Injectable({
  providedIn: 'root'
})
export class MobileAuthService {
  private vault: Vault | BrowserVault;
  constructor() {
    this.vault = new Vault({key: '', type: VaultType.SecureStorage});
  }
}
