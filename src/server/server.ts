/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/** Server code */

import * as express from 'express';
import * as http from 'http';
import * as socketIO from 'socket.io';
import * as path from 'path';
import { Request, Response } from 'express';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

io.on('connection', (socket: socketIO.Socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on 3000');
})