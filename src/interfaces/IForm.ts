export default interface IForm {
  typeAttack: boolean;
  agree: boolean | undefined;
  imageUrl: string | ArrayBuffer | null | undefined;
  role: string | undefined;
  id?: number;
  customHeroesArr:
    | [
        {
          heroName: string;
          heroAttribute: string;
          heroTypeAttack: string;
          heroDate: string;
          heroAgree: string;
          heroImage: string;
          heroRole: string;
          id: number;
        }
      ]
    | [];
  nameFromDirty: boolean;
  nameFromEmpty: boolean;
  attributeFromDirty: boolean;
  roleFormDirty: boolean;
  dateFormDirty: boolean;
  dateFormEmpty: boolean;
  imageFormDirty: boolean;
  acceptFormDirty: boolean | undefined;
  formValid: boolean;
}
