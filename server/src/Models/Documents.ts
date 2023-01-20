import mongoose, { Schema, model, SchemaType } from 'mongoose'

const schema = new Schema({
	documentId: { type: String, index: true },
	version: { type: Number, index: true },
	stage: { type: String, require: true },
	title: { type: String, require: true },
	description: { type: String },
	archived: { type: Boolean, default: false },
	createdBy: { type: Schema.Types.ObjectId, ref: 'tryUser' },
})

export default model('Documents', schema)
