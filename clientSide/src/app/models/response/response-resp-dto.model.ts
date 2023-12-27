import {ValidationDto} from "../validation/validation-dto.model";

export interface ResponseRespDto {
  id?: number;
  response?: string;
  validations?: Array<ValidationDto>;
}
