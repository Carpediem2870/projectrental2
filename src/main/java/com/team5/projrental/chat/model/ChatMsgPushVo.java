package com.team5.projrental.chat.model;

import lombok.Data;

@Data
public class ChatMsgPushVo extends ChatMsgSelVo {
    private int ichat; // 채팅 방 번호(PK)
}
