import { Section } from './components/Sections';
import { ImgDiv } from './components/ImgDiv';
import { WrapperDiv } from './components/WrapperDiv';
import { IconButton } from './components/IconButton';
import { Button } from './components/Buttons';
import { buttonsArr, listArr } from './assets/Constant';
import {
	user,
	calendar,
	blackRegister,
	register,
	share,
	resume,
} from './common/Icons';
import { ArticleButton } from './components/ArticleButton';
import { OverlayDiv } from './components/OverlayDiv';
import { iconsArr } from './common/Icons';
import './App.css';
import { ListComponent } from './components/ListComponent';
import { Card } from './components/Card';
import { PinkDiv } from './components/PinkDiv';
function App() {
	return (
		<>
			<Section>
				<WrapperDiv display="flex" style={{ flexDirection: 'column' }}>
					<ImgDiv img="/img/User.png" />
					<h1
						style={{
							fontWeight: 600,
							margin: 0,
							marginTop: '23px',
							marginBottom: '10px',
						}}
					>
						First Last
					</h1>
					<p
						style={{
							color: '#484848',
							margin: 0,
							lineHeight: 1.5,
							fontWeight: 400,
							textAlign: 'center',
						}}
					>
						LeadLead @ LeadLeadLead | LeadLead @ Lead Lead Lead | Lead Lead Lead
						@ Lead Lead | Lead Lead @ Lead Lead
					</p>
				</WrapperDiv>

				<WrapperDiv style={{ marginTop: '25px' }}>
					{iconsArr.map((item, i) => (
						<IconButton i={i} item={item} />
					))}
				</WrapperDiv>
				<WrapperDiv
					style={{ gap: '10px', marginTop: '25px', flexWrap: 'wrap' }}
				>
					{buttonsArr.map((item, i) => (
						<Button text={item.text} icon={item.icon} key={i} />
					))}
				</WrapperDiv>
			</Section>
			<Section>
				<WrapperDiv
					style={{
						marginTop: '50px',
						alignItems: 'flex-start',
						justifyItems: 'center',
						columnGap: '20px',
						rowGap: '22px',
					}}
					display="grid"
				>
					<Card
						icon={user}
						headingText="500+"
						mainText="LeadLeadLeadLead"
						transparentText="LeadLeadLeadLeadLead
						aaedjeqkeqjkd"
						dateText="Last updated Jan 2, 2024"
						backgroundColor="#94D7C5"
						backgroundImage="/img/PinkBg.svg"
						gridRow="1/3"
						gridColumn="1/2"
					/>
					<Card
						secondText="LeadLeadLead"
						backgroundColor="#FFFFFF"
						backgroundImage="/img/WhiteBg.svg"
						gridRow="1/2"
						gridColumn="2/3"
					/>
					<Card
						mainText="Hosting a Software Engineer Intern?"
						transparentText="My provide exclusive influencer and model services."
						anchorText="Send me a message"
						backgroundColor="#F4DFE2"
						backgroundImage="/img/PurpleBg.svg"
						gridRow="2/3"
						gridColumn="2/3"
					/>
				</WrapperDiv>
			</Section>
			<Section>
				<WrapperDiv style={{ maxWidth: '600px', margin: '48px auto' }}>
					<Card
						backgroundColor="black"
						color="white"
						mainText="LeadLeadLeadMy Technologies & Frameworks:"
						commonText="LLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLead"
						anchorText="Send me a message"
						width="100%"
					/>
				</WrapperDiv>
			</Section>
			<Section>
				<WrapperDiv
					style={{
						maxWidth: '600px',
						marginBottom: '40px',
						flexDirection: 'column',
						borderBottom: '1px solid #DEE2E5',
					}}
				>
					<img
						src="/img/Rectangle1.png"
						alt="#"
						style={{
							borderRadius: '30px',
							height: '400px',
							maxWidth: '100%',
							objectFit: 'cover',
							objectPosition: '45% 100%',
						}}
					/>
					<ArticleButton text="Read more articles" />
				</WrapperDiv>
			</Section>
			<Section>
				<WrapperDiv
					style={{
						maxWidth: '600px',
						flexDirection: 'column',
						borderBottom: '1px solid rgb(222, 226, 229)',
						paddingBottom: '40px',
					}}
					flexStart="flex-start"
				>
					<h3
						style={{
							marginBottom: '30px',
							fontSize: '17px',
						}}
					>
						Upcoming events
					</h3>
					<OverlayDiv
						text="Here is a breakdown of what I think beginners should focus on when
						learning design"
						date="24"
						buttonText="Free to register"
						background="linear-gradient(180deg, #0000, #0a1b1a),
						url(/img/Rectangle2.png)"
						height="340px"
						flexDirection="column"
						headingMargin="160px"
						backgroundColor="#783ff3"
						width="140px"
						paragraphWidth="65%"
						color="white"
						buttonTop="25px"
						fontColor="#94a1a6"
						buttonIcon={register}
						changeHeight="380px"
					/>
					<PinkDiv
						img="/img/Rectangle1.png"
						headingText="Name of your event"
						dateText="August 24, 2020, 8:00AM GMT0"
						icon1={calendar}
						icon2={blackRegister}
						backgroundColor="#F4DFE2"
					/>
				</WrapperDiv>
			</Section>
			<Section>
				<WrapperDiv
					style={{
						maxWidth: '600px',
						marginBottom: '40px',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					<h3
						style={{
							marginBottom: '30px',
							fontSize: '17px',
							fontWeight: '600',
						}}
					>
						My Apps on the App Store:
					</h3>
					<ul
						style={{
							width: '100%',
							display: 'grid',
							gap: '12px',
							borderBottom: '1px solid rgb(222, 226, 229)',
						}}
					>
						{listArr.map((item, i) => (
							<ListComponent text={item} key={i} icon={share} />
						))}
					</ul>
				</WrapperDiv>
				<WrapperDiv
					style={{
						maxWidth: '600px',
						paddingBottom: '50px',
						borderBottom: '1px solid rgb(222, 226, 229)',
						marginBottom: '50px',
					}}
				>
					<Button
						width="100%`"
						text="Resume"
						icon={resume}
						key={Math.floor(Math.random() + 10)}
					/>
				</WrapperDiv>
				<WrapperDiv style={{ marginBottom: '100px' }}>
					<p>© 2024 by Zaid Dahir. All Rights Reserved.</p>
				</WrapperDiv>
			</Section>
		</>
	);
}

export default App;
