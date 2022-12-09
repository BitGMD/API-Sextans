import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'


export default class StoreValidator {
  constructor() {}

  public schema = schema.create({
    id: schema.number(),
    password:schema.string(),
    preference_ids: schema.array([rules.minLength(1)]).members(schema.number())
  })

  public messages: CustomMessages = {}
}
