function MainPage() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>�������� ��</title>
      <link rel="stylesheet" href="main.css" />
      <header>
        <div id="logo" onclick="slowScroll('#top')">
          <span>Food delivery.exe</span>
        </div>
        <div style={{ textAlign: "right" }} id="about">
          <a href="#" title="�����" onclick="slowScroll('#main')">
            ��������
          </a>
          <a href="#" onclick="slowScroll('#guide')" title="����">
            ��� ���
          </a>
          <a
            href="/register"
            onclick="slowScroll('#contacts')"
            title="��������"
          >
            ��������
          </a>
          <a href="#" onclick="slowScroll('#faq')" title="�������">
            FAQ
          </a>
          <a href="#" onclick="testt()">
            �������
          </a>
        </div>
      </header>
      <div id="top">
        <h1>Food delivery.exe</h1>
        <h3>�������� �����</h3>
      </div>
      <div id="main">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');\n"
          }}
        />
        <div style={{ textAlign: "100px", marginTop: "30px" }}>
          <button>������� ����������</button>
        </div>
        <div
          style={{
            fontFamily: '"Oswald", sans-serif',
            color: "white",
            fontSize: "30px",
            marginTop: "15px"
          }}
        >
          <a>
            �� � ������� ���������� ��������� �� ������ �� �������, �� ����
            ������ ��������
          </a>
          <br />
        </div>
      </div>
      <div id="guide">
        <h2>Food delivery.exe</h2>
        <h4>��� ���</h4>
        <div className="img">
          <a href="https://www.youtube.com/watch?v=Lzbr7uTPqNA">
            <img src="no.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=Lzbr7uTPqNA">
            ��� ����������� ���������� ��� ���
          </a>
        </div>
        <div className="img">
          <a href="https://www.youtube.com/watch?v=vxWiX8hXPKc">
            <img src="no.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=vxWiX8hXPKc">
            ��� ����������� ���������� ��� ���
          </a>
        </div>
      </div>
      <div id="contacts">
        <center>
          <h5>����������:</h5>
        </center>
        <form id="ints">
          <label htmlFor="name">����� ����������:</label>
          <br />
          <span type="text" placeholder="�����" name="name" id="name">
            ������ ���������<br />����� ������<br />������ ������
          </span>
          <br />
          <label htmlFor="email">���������: </label>
          <br />
          <a href="https://discord.gg/acP7Z7gc">
            <img src="Ds.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=Lzbr7uTPqNA">
            <img src="Bhop.png" alt="" />
          </a>
          <a href="https://steamcommunity.com/groups/ukraine">
            <img src="Steam.png" alt="" />
          </a>
        </form>
      </div>
      <div id="faq">
        <div>
          <span className="title">Lorem �� �� ��� ����</span>
          <br />
          <span className="heading">
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,
          </span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� ��
            ��� ����,Lorem �� �� ��� ����,
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� ��
            ��� ����,
          </p>
        </div>
        <div>
          <span className="title">Lorem �� �� ��� ����,</span>
          <br />
          <span className="heading">
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,
          </span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,.
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� ��
            ��� ����,
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,
          </p>
        </div>
        <div>
          <span className="title">������'� ��������</span>
          <br />
          <span className="heading">Lorem �� �� ��� ����,</span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� ��
            ��� ����,
          </p>
          <span className="heading">� �������������������</span>
          <p>
            Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem
            �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� �� ��� ����,Lorem �� ��
            ��� ����,Lorem �� �� ��� ����,
          </p>
          <span className="heading">��������</span>
          <p>
            Lorem �� �� ��� ����,<br />
            sv_cheats 1<br />
            Lorem �� �� ��� ����,<br />
            Lorem �� �� ��� ����,<br />
            Lorem �� �� ��� ����,
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
