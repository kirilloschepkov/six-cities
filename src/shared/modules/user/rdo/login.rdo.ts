import { Expose } from 'class-transformer';

export class LoginRDO {

  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public avatarPath: string;
}
