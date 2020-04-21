export interface Animal {
  name: string;
  type: string;
  image: string;
  gender: string;
  isSelected: boolean;
  latitude: number;
  longitude: number;
}

export interface AnimalChild {
  name: string;
  type: string;
  id: string;
  parentId: string;
  isSelected: boolean;
}

export default interface AnimalObj {
  uuid: string;
  animal: Animal;
  child: Array<AnimalChild>;
}
