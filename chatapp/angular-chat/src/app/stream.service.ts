import { Injectable } from '@angular/core';
import { StreamChat, Channel, ConnectAPIResponse } from 'stream-chat';

declare interface UserInfo {
  token: string;
  apiKey: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})

export class StreamService {
  currentUser: any;
  constructor(private streamClient: StreamChat) {}

  public async initClient(user: UserInfo): Promise<Channel> {
    this.streamClient = new StreamChat(user.apiKey);
  this.currentUser = await this.streamClient.connectUser(      {
      id: user.username,
      name: user.username,
    },
    user.token)
  
    return this.streamClient.channel('messaging', 'General');
  }
}