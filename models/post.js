module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        // 리트윗
        db.Post.belongsTo(db.Post, { as: "Retweet" });
        db.Post.belongsToMany(db.User, { through: "PostLike", as: "PostLikers" });
        db.Post.belongsToMany(db.User, { through: "PostRetweet", as: "Retweeters" });
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
    };
    return Post;
}