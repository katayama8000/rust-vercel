import 'reflect-metadata';
import { injectable, inject, container } from 'tsyringe';

interface ISystemSetting {
  settingCode: string | null;
  settingName: string | null;
}

class SystemSetting implements ISystemSetting {
  public settingCode: string | null = null;
  public settingName: string | null = null;
}

@injectable()
class SandboxService {
  constructor(
    @inject('systemCode') private systemCode: string,
    @inject('systemAge') private systemAge: number,
    @inject('setting') private setting: ISystemSetting
  ) {}

  showSystemCode() {
    console.log(`systemCode=${this.systemCode}`);
  }

  showSystemAge() {
    console.log(`systemAge=${this.systemAge}`);
  }

  showSetting() {
    console.log(
      `Setting[settingCode=${this.setting.settingCode}, settingName=${this.setting.settingName}]`
    );
  }
}

//値の登録
container.register('systemCode', { useValue: '001' });
container.register('systemAge', { useValue: 100 });

//オブジェクトの登録
const setting = new SystemSetting();
setting.settingCode = '010';
setting.settingName = 'it';
container.register('setting', { useValue: setting });

const sandboxService = container.resolve(SandboxService);
sandboxService.showSystemCode();
sandboxService.showSystemAge();
sandboxService.showSetting();
