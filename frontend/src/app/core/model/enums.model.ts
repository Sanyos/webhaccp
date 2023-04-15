import { CompanyCategoryTypes } from '../enum/company-category-type.enum';
import { RoleTypes } from '../enum/roles.enum';
import {
  WaterSupplyEnum,
  EntranceEnum,
  FoodWasteTransportEnum,
  PestControlEnum,
  DishToWashEnum,
  DishwasherEnum,
  EggEnum,
  DeliveryMethodEnum,
  RefigratorEnum,
  ColdStorageProductEnum,
  ProductPreparatoryEnum,
  StorageEnum,
  SewageDrainEnum,
  IngredientEnum,
  ReviewReasonEnum,
  ReviewerJobEnum,
  LastAuthorityEnum,
} from './haccp.model';

export interface EnumsModel {
  CompanyCategoryTypes: CompanyCategoryTypes;
  Roles: RoleTypes;
  SewageDrainEnum: SewageDrainEnum;
  WaterSupplyEnum: WaterSupplyEnum;
  EntranceEnum: EntranceEnum;
  FoodWasteTransportEnum: FoodWasteTransportEnum;
  PestControlEnum: PestControlEnum;
  DishToWashEnum: DishToWashEnum;
  DishwasherEnum: DishwasherEnum;
  EggEnum: EggEnum;
  DeliveryMethodEnum: DeliveryMethodEnum;
  RefigratorEnum: RefigratorEnum;
  ColdStorageProductEnum: ColdStorageProductEnum;
  ProductPreparatoryEnum: ProductPreparatoryEnum;
  StorageEnum: StorageEnum;
  IngredientsEnum: IngredientEnum;
  ReviewReasonEnum: ReviewReasonEnum;
  ReviewerJobEnum: ReviewerJobEnum;
  LastAuthorityEnum: LastAuthorityEnum;
}
