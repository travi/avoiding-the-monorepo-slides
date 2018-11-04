import React from 'react';
import {Appear, Deck, Heading, Image, Link, List, ListItem, Slide, Text, Typeface} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default/index';
import preloader from 'spectacle/lib/utils/preloader';

const theme = createTheme({
  primary: '#C12127'
});

const images = {
  pr: require('../assets/pr.png'),
  semanticReleaseLogo: require('../assets/semantic-release.png'),
  greenkeeperKeeperLogo: require('../assets/greenkeeper-keeper.jpg'),
  yeoman: require('../assets/yeoman-illustration.png')
};

preloader(images);

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1}>
          Avoiding the Monorepo
        </Heading>
        <Text textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>Monolith vs Modularity</Heading>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Splitting the Monolith</Heading>
        <List>
          <Appear><ListItem>Important to understand trade-offs</ListItem></Appear>
          <Appear><ListItem>Undeniable benefits</ListItem></Appear>
          <Appear><ListItem>Account for costs when splitting</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Costs of Modularity</Heading>
        <List>
          <Appear><ListItem>Unpublished changes</ListItem></Appear>
          <Appear><ListItem>Published versions not yet consumed</ListItem></Appear>
          <Appear><ListItem>Duplication of decisions/implementations</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Management Options</Heading>
        <List>
          <Appear><ListItem>node.js/npm are well suited for extreme modularity</ListItem></Appear>
          <Appear><ListItem>Repositories 1:1 for npm packages</ListItem></Appear>
          <Appear><ListItem>Monorepos that version many npm packages</ListItem></Appear>
          <Appear><ListItem>I consider monorepos to be a symptom</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>Continuous Deployment</Heading>
        <Heading size={2} textColor="primary" fit>Automate Publishing and Updating</Heading>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Semantic Release</Heading>
        <Image src={images.semanticReleaseLogo.replace('/', '')} width="50%" />
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="#00c775" textFont="primary" caps fit>Greenkeeper</Heading>
        <Image
          src={require('../assets/greenkeeper.svg')}
          width="50%"
          style={{boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)', borderRadius: '100%'}}
        />
      </Slide>
      {/* <Slide bgColor="white"> */}
      {/* <Heading size={3} textColor="black" textFont="primary" caps fit>Greenkeeper sends a PR</Heading> */}
      {/* <Image src={images.pr.replace('/', '')} /> */}
      {/* </Slide> */}
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Greenkeeper Keeper</Heading>
        <Image src={images.greenkeeperKeeperLogo.replace('/', '')} width="50%" />
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>Project Scaffolding</Heading>
        <Heading size={2} textColor="primary" fit>Codify Your Decisions</Heading>
      </Slide>
      <Slide bgColor="white">
        <Typeface googleFont="Roboto Slab">
          <Heading size={3} textColor="black" textFont="primary" caps fit>Yeoman</Heading>
        </Typeface>
        <Image src={images.yeoman.replace('/', '')} width="50%" />
      </Slide>
      <Slide bgColor="white">
        <Typeface googleFont="Roboto Slab">
          <Heading size={3} textColor="black" textFont="primary" caps fit>Yeoman</Heading>
        </Typeface>
        <List>
          <Appear><ListItem>De facto standard generator for JavaScript projects</ListItem></Appear>
          <Appear>
            <ListItem>
              <Link textColor="black" href="http://yeoman.io/generators/">
                Lots of generators already available
              </Link>
            </ListItem>
          </Appear>
          <Appear><ListItem>Ended up not fitting how I wanted to compose generators</ListItem></Appear>
          <Appear>
            <ListItem>
              So, I&apos;m now building&nbsp;
              <Link textColor="black" href="https://github.com/travi/project-scaffolder">my own scaffolding tool</Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Foundational Decisions</Heading>
        <List>
          <Appear><ListItem>git configuration</ListItem></Appear>
          <Appear><ListItem>Public/Private</ListItem></Appear>
          <Appear><ListItem>License</ListItem></Appear>
          <Appear><ListItem>Build (CI) service</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Language Decisions</Heading>
        <List>
          <Appear><ListItem>Deployment Strategy</ListItem></Appear>
          <Appear><ListItem>Testing Strategy</ListItem></Appear>
          <Appear><ListItem>Build Automation</ListItem></Appear>
          <Appear><ListItem>Commit Conventions</ListItem></Appear>
          <Appear><ListItem>Version</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>Scaffolder Demo</Heading>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Summary</Heading>
        <List>
          <Appear><ListItem>Automate Publishing</ListItem></Appear>
          <Appear><ListItem>Isolate Updates</ListItem></Appear>
          <Appear><ListItem>Automate Updates (if you have enough confidence)</ListItem></Appear>
          <Appear><ListItem>Codify Decisions</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']}>
        <Heading size={1} fit>Matt Travi</Heading>

        <List>
          <ListItem>
            <Link textColor="white" target="_blank" href="https://matt.travi.org">matt.travi.org</Link>
          </ListItem>
          <ListItem>
            <Link textColor="white" target="_blank" href="https://twitter.com/mtravi">twitter.com/mtravi</Link>
          </ListItem>
          <ListItem>
            <Link
              textColor="white"
              target="_blank"
              href="https://github.com/travi/project-scaffolder/tree/dsmjs-may-2018"
            >
              github.com/travi/project-scaffolder
            </Link>
          </ListItem>
          <ListItem>
            <Link
              textColor="white"
              target="_blank"
              href="https://presentations.travi.org/avoid-the-monolith-icc-may-2018"
            >
              presentations.travi.org/avoid-the-monolith-icc-may-2018
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  );
}
