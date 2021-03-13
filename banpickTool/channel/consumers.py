import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from channels.consumer import AsyncConsumer
class ChatConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'channel_%s' % self.room_name

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.send({
            "type":"websocket.accept"
        })

    async def websocket_receive(self, evnet):
        data = evnet.get('text', None)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type":"message",
                "text":data
            })

    async def message(self, event):
        await self.send({
            "type":"websocket.send",
            "text":event['text']
        })

    async def websocket_disconnect(self, event):
        print('disconnected', event)