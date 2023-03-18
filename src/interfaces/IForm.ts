export default interface IForm {
  typeAttack: boolean;
  agree: boolean;
  imageUrl: string | ArrayBuffer | null | undefined;
  role: string;
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
        }
      ]
    | [];
}
