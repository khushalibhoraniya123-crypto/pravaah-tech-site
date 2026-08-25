import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAdminUser extends Document {
  email: string;
  password: string;
  name: string;
  role: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminUserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    name: {
      type: String,
      default: 'Pravaah Administrator',
    },
    role: {
      type: String,
      default: 'admin',
    },
  },
  { timestamps: true }
);

AdminUserSchema.pre<IAdminUser>('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminUserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const AdminUser = mongoose.model<IAdminUser>('AdminUser', AdminUserSchema);
