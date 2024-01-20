import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      avatar:{
        type: String,
        default:"https://images.search.yahoo.com/images/view;_ylt=AwriiV2UoUZlov0h14eJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2VhZmEwMmJlZTg2ZTFkNDJlYjJmNzdhZWZkNTg3ZmQ5BGdwb3MDMTA1BGl0A2Jpbmc-?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Davatar%2Bpng%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D105&w=512&h=512&imgurl=www.pngall.com%2Fwp-content%2Fuploads%2F12%2FAvatar-PNG-Image.png&rurl=https%3A%2F%2Fwww.pngall.com%2Favatar-png%2Fdownload%2F95658&size=+6.4KB&p=avatar+png&oid=eafa02bee86e1d42eb2f77aefd587fd9&fr2=piv-web&fr=mcafee&tt=Avatar+PNG+Image+-+PNG+All&b=61&ni=21&no=105&ts=&tab=organic&sigr=uL9P7Kl7.E7M&sigb=ATmmpEjMM2DN&sigi=1uEi.mqJEz8r&sigt=wqiWxxKQ2f.C&.crumb=0XAZms2Y3U.&fr=mcafee&fr2=piv-web&type=E210US91215G0"        
      },
    },
    { timestamps: true }
  );
  
  const User = mongoose.model('User', userSchema);
  
  export default User;