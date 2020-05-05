const listOfEvents =
{
    'message_new' : require("./messageNew/messageNew.js"),
    'message_reply' : null,
    'message_edit' : null,
    'message_allow' : null,
    'message_deny' : null,
    'photo_new' : null,
    'photo_comment_new' : null,
    'photo_comment_edit' : null,
    'photo_comment_restore' : null,
    'photo_comment_delete' : null,
    'audio_new' : null,
    'video_new' : null,
    'video_comment_new' : null,
    'video_comment_delete' : null,
    'wall_post_new' : null,
    'wall_repost' : null,
    'wall_reply_new' : null,
    'wall_reply_edit' : null,
    'wall_reply_restore' : null,
    'wall_reply_delete' : null,
    'board_post_new' : null,
    'board_post_delete' : null,
    'group_leave' : null,
    'group_join' : null,
    'user_block' : null,
    'user_unblock' : null,
    'poll_vote_new' : null,
    'group_officers_edit' : null,
    'group_change_settings' : null,
    'group_change_photo' : null,
    'group_change_settings' : null,
    'vkpay_transaction' : null,
    'app_payload' : null,
};

function Distributor(updates)
{
    for(let i = 0; i < updates.length; i++)
        listOfEvents[updates[i].type](updates[i].object);
}

module.exports = Distributor;