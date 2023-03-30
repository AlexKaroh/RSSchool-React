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
}
