
int SPEAKER_PIN=10;
int sound[21]={131,147,165,175,196,220,246,262,294,330,349,392,440,494,523,587,660,698,784,880,988};

void setup() {
  Wire.begin(0x8);
  pinMode(SPEAKER_PIN,OUTPUT);              
  Wire.onReceive(receiveEvent);
}

void a(int idx)
{
    tone(SPEAKER_PIN,sound[idx],100);
    delay(25);
  }


void receiveEvent(int howMany) {
  while (Wire.available()) {
    int c = Wire.read();
      if (c<21)
        {
        a(c);
        }
  }
}

void loop() {
  delay(100);
}
